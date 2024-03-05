package com.jobapplication.mega.service;


import com.jobapplication.mega.dto.request.*;
import com.jobapplication.mega.dto.response.*;
public interface AuthenticationService {

    MessageResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgetPasswordRequest request);
}
