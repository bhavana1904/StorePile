package com.example.project.Repository;

import com.example.project.Domain.DocumentModel;
import com.example.project.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User getById(Long id);

    @Query("Select s from DocumentModel s where s.user.id=:id")
    List <DocumentModel> getDocument(Long id);

}