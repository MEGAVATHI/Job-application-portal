package com.jobapplication.mega.service;



import com.jobapplication.mega.dto.request.CreateJobRequest;
import com.jobapplication.mega.dto.response.JobFetchResponse;
import com.jobapplication.mega.dto.response.MessageResponse;

import com.jobapplication.mega.utils.JobNotFoundException;
import java.util.List;

public interface JobService {
    MessageResponse create(CreateJobRequest request);

    List<JobFetchResponse> getAll();

    JobFetchResponse getById(Long id) throws JobNotFoundException;

    MessageResponse update(Long id, CreateJobRequest request) throws JobNotFoundException;

    MessageResponse deleteById(Long id) throws JobNotFoundException;

    
}