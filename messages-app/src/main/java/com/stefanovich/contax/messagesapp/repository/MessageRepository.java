package com.stefanovich.contax.messagesapp.repository;

import com.stefanovich.contax.messagesapp.model.Message;
import com.stefanovich.contax.messagesapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByUserSender(User userSender);
    List<Message> findByUserAddressee(User Addressee);

}
