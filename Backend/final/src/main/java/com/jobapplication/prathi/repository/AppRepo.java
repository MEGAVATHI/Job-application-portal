package com.jobapplication.prathi.repository;


import com.jobapplication.prathi.models.Application;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppRepo extends JpaRepository<Application, Long> {
    // You can define custom query methods here if needed
    List<Application> findByEmail(String email);
}