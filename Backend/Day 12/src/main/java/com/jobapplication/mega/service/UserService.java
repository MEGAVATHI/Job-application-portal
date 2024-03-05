package com.jobapplication.mega.service;


import com.jobapplication.mega.dto.request.RegisterRequest;
import com.jobapplication.mega.dto.response.MessageResponse;
import com.jobapplication.mega.dto.response.UserFetchResponse;
import com.jobapplication.mega.utils.UserNotFoundException;

import java.util.List;


public interface UserService {
    MessageResponse register(RegisterRequest request);

    List<UserFetchResponse> getAll();

    UserFetchResponse getById(String id) throws UserNotFoundException;

    MessageResponse deleteByEmail(String email);

}
