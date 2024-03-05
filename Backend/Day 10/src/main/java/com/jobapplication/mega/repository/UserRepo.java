package com.jobapplication.mega.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.mega.models.User;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

}
