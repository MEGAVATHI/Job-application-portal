package com.jobapplication.prathi.service;



import com.jobapplication.prathi.dto.request.CreateAppRequest;
import com.jobapplication.prathi.dto.response.AppFetchResponse;
import com.jobapplication.prathi.dto.response.MessageResponse;


import java.util.List;

public interface AppService {
    MessageResponse create(CreateAppRequest request);

    List<AppFetchResponse> getAll();

    AppFetchResponse getById(Long id) throws Exception;

    MessageResponse update(Long id, CreateAppRequest request) throws Exception;

    MessageResponse deleteById(Long id) throws Exception;

    MessageResponse updateStatus(Long id, String status) throws Exception;

    List<AppFetchResponse> getByEmail(String email) throws Exception;
}
