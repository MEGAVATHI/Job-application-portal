package com.jobapplication.prathi.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.prathi.models.Job;





public interface JobRepo extends JpaRepository<Job, Long> {
    List<Job> findByType(String type);

}
