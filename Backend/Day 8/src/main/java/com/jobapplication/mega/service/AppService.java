package com.jobapplication.mega.service;



import com.jobapplication.mega.dto.request.CreateAppRequest;
import com.jobapplication.mega.dto.response.AppFetchResponse;
import com.jobapplication.mega.dto.response.MessageResponse;


import java.util.List;

public interface AppService {
    MessageResponse create(CreateAppRequest request);

    List<AppFetchResponse> getAll();

    AppFetchResponse getById(Long id) throws Exception;

    MessageResponse update(Long id, CreateAppRequest request) throws Exception;

    MessageResponse deleteById(Long id) throws Exception;
}
