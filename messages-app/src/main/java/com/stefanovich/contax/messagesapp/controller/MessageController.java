package com.stefanovich.contax.messagesapp.controller;

import com.stefanovich.contax.messagesapp.dto.MessageDto;
import com.stefanovich.contax.messagesapp.model.Message;
import com.stefanovich.contax.messagesapp.model.User;
import com.stefanovich.contax.messagesapp.repository.MessageRepository;
import com.stefanovich.contax.messagesapp.repository.UserRepository;
import com.stefanovich.contax.messagesapp.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController()
@RequestMapping(path = "/message")
@RequiredArgsConstructor
public class MessageController {
    final MessageRepository messageRepository;
    final UserRepository userRepository;
    final MessageService messageService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addMessage(@RequestBody MessageDto messageDto) {
        messageService.saveMessage(messageDto);
    }

    @GetMapping
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @GetMapping("{id}")
    public Message getMessage(@PathVariable Long id) {
        return messageRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("Not found message with id - " + id));
    }

    @PutMapping("{id}")
    public Message updateMessage(@RequestBody Message newMessage, @PathVariable("id") Long id) {
        return messageRepository.findById(id)
                .map(message -> {
                    message.setContent(newMessage.getContent());
                    return messageRepository.save(message);
                })
                .orElseGet(() -> messageRepository.save(newMessage));
    }

    @DeleteMapping("{id}")
    public void deleteMessage(@PathVariable("id") Long id) {
        messageRepository.deleteById(id);
    }

    @GetMapping("/sender/{id}")
    public List<Message> getAllMessagesByUserSender(@PathVariable("id") Long id) {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("Not found user with id - " + id));
        return messageRepository.findByUserSender(user);
    }

    @GetMapping("/addressee/{id}")
    public List<Message> getAllMessagesByUserAddressee(@PathVariable("id") Long id) {
        User user = userRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("Not found user with id - " + id));
        return messageRepository.findByUserAddressee(user);
    }

}
