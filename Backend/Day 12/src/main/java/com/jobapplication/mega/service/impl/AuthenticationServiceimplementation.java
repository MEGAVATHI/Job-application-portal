package com.jobapplication.mega.service.impl;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobapplication.mega.dto.request.ForgetPasswordRequest;
import com.jobapplication.mega.dto.request.LoginRequest;
import com.jobapplication.mega.dto.request.RegisterRequest;
import com.jobapplication.mega.dto.response.ForgotPasswordResponse;
import com.jobapplication.mega.dto.response.LoginResponse;
import com.jobapplication.mega.dto.response.MessageResponse;
import com.jobapplication.mega.enumerated.Role;
import com.jobapplication.mega.models.User;
import com.jobapplication.mega.models.Token;
import com.jobapplication.mega.repository.UserRepo;
import com.jobapplication.mega.service.AuthenticationService;
import com.jobapplication.mega.utils.JwtUtil;
import com.jobapplication.mega.repository.TokenRepo;



import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceimplementation implements AuthenticationService {

    private final UserRepo userRepository;
    private final TokenRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public MessageResponse register(RegisterRequest request) {
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        if(isUser.isPresent()){
            return MessageResponse.builder().message("User already exists with email "+request.getEmail()).build();
        }
        var user = User.builder().
                    name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.valueOf(request.getRole()))
            
                   
                    .build();
        userRepository.save(user);
        return MessageResponse.builder().message("User registered successfully").build();   
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new UsernameNotFoundException("User not found with mail "+request.getEmail()));
        Map<String,Object> claims = new HashMap<>();
        claims.put("role",user.getRole().toString());
        var accessToken = jwtUtil.generateToken(claims,user);

        revokeAllUserTokens(user);
        saveUserToken(accessToken,user);
        return LoginResponse.builder()
                .message("User logged in successfully.")
                .accessToken(accessToken)
                .build();  
        
    }

    private void saveUserToken(String accessToken, User user) {
        var token = Token.builder()
                .token(accessToken)
                .user(user)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(user.getId());
        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }
    @Override
    public ForgotPasswordResponse forgotPassword(ForgetPasswordRequest request){
        var user=userRepository.findByEmail(request.getEmail()).orElseThrow(()->new UsernameNotFoundException("User not found with email "+request.getEmail()));
        if(passwordEncoder.matches(request.getEmail(), user.getEmail())){
            return ForgotPasswordResponse.builder().message("Password incorrect.").build();
        }
        if(!request.getNewPassword().equals(request.getConfirmPassword())){
            return ForgotPasswordResponse.builder().message("Password Mismatch").build();
        }
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        return ForgotPasswordResponse.builder().message("Password updated successfully").build();
    }

}
