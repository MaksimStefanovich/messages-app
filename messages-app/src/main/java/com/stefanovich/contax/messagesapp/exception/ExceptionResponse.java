package com.stefanovich.contax.messagesapp.exception;

import java.time.ZonedDateTime;

public class ExceptionResponse {
    private ZonedDateTime dateTime;
    private String message;
    private String details;

    public ExceptionResponse(ZonedDateTime dateTime, String message, String details) {
        this.dateTime = dateTime;
        this.message = message;
        this.details = details;
    }

    public ZonedDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(ZonedDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
