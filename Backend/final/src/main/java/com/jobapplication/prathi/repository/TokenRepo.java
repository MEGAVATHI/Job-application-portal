package com.jobapplication.prathi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobapplication.prathi.models.Token;

import java.util.List;
import java.util.Optional;




public interface TokenRepo extends JpaRepository<Token,String>{
    List<Token> findAllByUser_IdAndExpiredIsFalseAndRevokedIsFalse(String id);  // User with tokem not expired and not revoked

    Optional<Token> findByToken(String token);
}
