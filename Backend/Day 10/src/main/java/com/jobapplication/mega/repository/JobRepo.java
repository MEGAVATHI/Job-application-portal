package com.jobapplication.mega.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.mega.models.Job;





public interface JobRepo extends JpaRepository<Job, Long> {


}
