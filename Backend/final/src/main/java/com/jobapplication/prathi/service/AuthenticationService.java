package com.jobapplication.prathi.service;


import com.jobapplication.prathi.dto.request.*;
import com.jobapplication.prathi.dto.response.*;
public interface AuthenticationService {

    MessageResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgetPasswordRequest request);
}
