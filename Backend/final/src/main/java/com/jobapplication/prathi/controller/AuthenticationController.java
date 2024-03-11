package com.jobapplication.prathi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobapplication.prathi.dto.request.ForgetPasswordRequest;
import com.jobapplication.prathi.dto.request.LoginRequest;
import com.jobapplication.prathi.dto.request.RegisterRequest;
import com.jobapplication.prathi.dto.response.ForgotPasswordResponse;
import com.jobapplication.prathi.dto.response.LoginResponse;
import com.jobapplication.prathi.dto.response.MessageResponse;
import com.jobapplication.prathi.service.AuthenticationService;
import com.jobapplication.prathi.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping(MyConstant.AUTH)
@RequiredArgsConstructor
@Tag(name="Authentication")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    
    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        MessageResponse response = new MessageResponse();
        try{
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    
    @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        LoginResponse response = new LoginResponse();
        try{
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
   @PatchMapping(MyConstant.FORGOT_PASSWORD)
public ResponseEntity<ForgotPasswordResponse> forgotPassword(@RequestBody ForgetPasswordRequest request) {
    try {
        ForgotPasswordResponse response = authenticationService.forgotPassword(request);
        return ResponseEntity.ok(response);
    } catch (UsernameNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body(ForgotPasswordResponse.builder().message("User not found").build());
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                             .body(ForgotPasswordResponse.builder().message("Failed to update password").build());
    }
}
    

    
}
