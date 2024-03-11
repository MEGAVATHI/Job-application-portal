package com.jobapplication.prathi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jobapplication.prathi.models.User;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

}
