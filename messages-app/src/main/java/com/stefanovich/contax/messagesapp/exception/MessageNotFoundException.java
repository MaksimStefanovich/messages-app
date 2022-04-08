package com.stefanovich.contax.messagesapp.exception;

import javax.persistence.EntityNotFoundException;

public class MessageNotFoundException extends EntityNotFoundException {
    public MessageNotFoundException(String message) {
        super(message);
    }
}
