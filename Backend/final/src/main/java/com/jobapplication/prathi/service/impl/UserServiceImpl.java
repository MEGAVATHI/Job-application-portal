package com.jobapplication.prathi.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobapplication.prathi.dto.request.RegisterRequest;

import com.jobapplication.prathi.dto.response.MessageResponse;
import com.jobapplication.prathi.dto.response.UserFetchResponse;
import com.jobapplication.prathi.enumerated.Role;
import com.jobapplication.prathi.repository.UserRepo;
import com.jobapplication.prathi.service.UserService;
import com.jobapplication.prathi.models.User;

import com.jobapplication.prathi.utils.UserNotFoundException;
import lombok.RequiredArgsConstructor;




@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements UserService{

    private final UserRepo userRepository;

    @Override
    public MessageResponse register(RegisterRequest request){
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        
        if(isUser.isPresent()){
            return MessageResponse.builder().message("User already exists with email "+request.getEmail()).build();
        }
        var user = User.builder().firstname(request.getFirstname()).
                                  lastname(request.getLastname()).
                                  mobile(request.getMobile()).
                                  email(request.getEmail()).
                                  password(request.getPassword()).
                                  role(Role.USER).
                                  build();
        userRepository.save(user);
        return MessageResponse.builder().message("User registered successfully").build();   
    }

    @Override
    public List<UserFetchResponse> getAll(){
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> UserFetchResponse.builder().firstname(user.getFirstname()).lastname(user.getLastname()).mobile(user.getMobile()).email(user.getEmail()).password(user.getPassword()).build())
                .collect(Collectors.toList());
        // return users.map(user -> UserResponse.builder().name(user.getName()).email(user.getEmail()).build());
    }

    @Override
    public UserFetchResponse getById(String id) throws UserNotFoundException{
        Optional<User> isUser = userRepository.findById(id);
        
        if(isUser.isEmpty()){
            throw new UserNotFoundException("User not found with id "+id);
        }
        return UserFetchResponse.builder().firstname(isUser.get().getFirstname()).lastname(isUser.get().getLastname()).mobile(isUser.get().getMobile()).email(isUser.get().getEmail()).password(isUser.get().getPassword()).build();
    }

    @Override
    public MessageResponse deleteByEmail(String email){
        Optional<User> isUser = userRepository.findByEmail(email);
        
        if(isUser.isEmpty()){
            return MessageResponse.builder().message("User not found with email "+email).build();
        }
        userRepository.delete(isUser.get());
        return MessageResponse.builder().message("User deleted successfully").build();   
    }
  
  
}
