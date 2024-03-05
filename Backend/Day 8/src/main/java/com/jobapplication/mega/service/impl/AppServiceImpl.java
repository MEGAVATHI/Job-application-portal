package com.jobapplication.mega.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jobapplication.mega.dto.request.CreateAppRequest;
import com.jobapplication.mega.dto.response.AppFetchResponse;
import com.jobapplication.mega.dto.response.MessageResponse;
import com.jobapplication.mega.models.Application;
import com.jobapplication.mega.repository.AppRepo;
import com.jobapplication.mega.service.AppService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppServiceImpl implements AppService {

    private final AppRepo appRepository;

    @Override
    public MessageResponse create(CreateAppRequest request) {
        // Create a new Application
        var application = new Application();
        application.setName(request.getName());
        application.setEmail(request.getEmail());
        application.setMobile(request.getMobile());
        application.setGender(request.getGender());
        
        // Set user and job details based on your implementation
        // application.setUser(request.getUser());
        // application.setJob(request.getJob());

        // Save the application
        appRepository.save(application);

        return MessageResponse.builder().message("Application created successfully").build();
    }

    @Override
    public List<AppFetchResponse> getAll() {
        List<Application> applications = appRepository.findAll();
        return applications.stream()
                .map(app -> new AppFetchResponse(app.getId(), app.getName(), app.getEmail(), app.getGender(),app.getMobile()))
                .collect(Collectors.toList());
    }

    @Override
    public AppFetchResponse getById(Long id) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }
        Application application = appOptional.get();
        return new AppFetchResponse(application.getId(), application.getName(), application.getEmail(), application.getMobile(),application.getGender());
    }

    @Override
    public MessageResponse update(Long id, CreateAppRequest request) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        Application application = appOptional.get();
        application.setName(request.getName());
        application.setEmail(request.getEmail());
        application.setMobile(request.getMobile());
        application.setGender(request.getGender());
        // Update user and job details if needed
        // application.setUser(request.getUser());
        // application.setJob(request.getJob());

        appRepository.save(application);

        return MessageResponse.builder().message("Application updated successfully").build();
    }

    @Override
    public MessageResponse deleteById(Long id) throws Exception {
        Optional<Application> appOptional = appRepository.findById(id);
        if (appOptional.isEmpty()) {
            throw new Exception("Application not found with id " + id);
        }

        appRepository.deleteById(id);

        return MessageResponse.builder().message("Application deleted successfully").build();
    }
}