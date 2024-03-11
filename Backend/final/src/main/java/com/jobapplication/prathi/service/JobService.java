package com.jobapplication.prathi.service;



import com.jobapplication.prathi.dto.request.CreateJobRequest;
import com.jobapplication.prathi.dto.response.JobFetchResponse;
import com.jobapplication.prathi.dto.response.MessageResponse;

import com.jobapplication.prathi.utils.JobNotFoundException;
import java.util.List;

public interface JobService {
    MessageResponse create(CreateJobRequest request);

    List<JobFetchResponse> getAll();

    JobFetchResponse getById(Long id) throws JobNotFoundException;

    MessageResponse update(Long id, CreateJobRequest request) throws JobNotFoundException;

    MessageResponse deleteById(Long id) throws JobNotFoundException;

    List<JobFetchResponse> getByType(String type) throws JobNotFoundException;
    
}