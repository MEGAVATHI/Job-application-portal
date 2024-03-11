package com.jobapplication.prathi.service;


import com.jobapplication.prathi.dto.request.RegisterRequest;
import com.jobapplication.prathi.dto.response.MessageResponse;
import com.jobapplication.prathi.dto.response.UserFetchResponse;
import com.jobapplication.prathi.utils.UserNotFoundException;

import java.util.List;


public interface UserService {
    MessageResponse register(RegisterRequest request);

    List<UserFetchResponse> getAll();

    UserFetchResponse getById(String id) throws UserNotFoundException;

    MessageResponse deleteByEmail(String email);

}
