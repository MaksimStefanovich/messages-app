package com.stefanovich.contax.messagesapp.repository;

import com.stefanovich.contax.messagesapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
