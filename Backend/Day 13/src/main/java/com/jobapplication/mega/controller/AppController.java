package com.jobapplication.mega.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.jobapplication.mega.dto.request.CreateAppRequest;
import com.jobapplication.mega.dto.response.AppFetchResponse;
import com.jobapplication.mega.dto.response.MessageResponse;
import com.jobapplication.mega.service.AppService;
import com.jobapplication.mega.utils.MyConstant;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(MyConstant.USER + "/applications")
@PreAuthorize("hasAnyRole('USER','ADMIN')")
public class AppController {

    private final AppService appService;

    @PostMapping(MyConstant.CREATE)
    public ResponseEntity<MessageResponse> createApp(@RequestBody CreateAppRequest request) {
        MessageResponse response = appService.create(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping(MyConstant.GET)
    public ResponseEntity<?> getAllApps() {
        return new ResponseEntity<>(appService.getAll(), HttpStatus.OK);
    }

    @GetMapping(MyConstant.GET+"/{id}")
    public ResponseEntity<?> getAppById(@PathVariable Long id) {
        try {
            AppFetchResponse response = appService.getById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(MyConstant.UPDATE+"/{id}")
    public ResponseEntity<MessageResponse> updateApp(@PathVariable Long id, @RequestBody CreateAppRequest request) {
        try {
            MessageResponse response = appService.update(id, request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(MyConstant.DELETE+"/{id}")
    public ResponseEntity<MessageResponse> deleteApp(@PathVariable Long id) {
        try {
            MessageResponse response = appService.deleteById(id);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            MessageResponse responseMessage = MessageResponse.builder().message(e.getMessage()).build();
            return new ResponseEntity<>(responseMessage, HttpStatus.NOT_FOUND);
        }
    }
}
