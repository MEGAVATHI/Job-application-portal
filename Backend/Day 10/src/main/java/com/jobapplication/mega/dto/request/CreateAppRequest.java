package com.jobapplication.mega.dto.request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor


public class CreateAppRequest {
    private String mobile;
    private String name;
    private String email;
    private String gender;
}