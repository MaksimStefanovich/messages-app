package com.stefanovich.contax.messagesapp.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity
@Table(name = "message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank(message = "Message should have at least 1 character ")
    private String content;
    private LocalDate createdOn;
    @ManyToOne
    private User userSender;
    @ManyToOne
    private User userAddressee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDate createdOn) {
        this.createdOn = createdOn;
    }

    public User getUserSender() {
        return userSender;
    }

    public void setUserSender(User userSender) {
        this.userSender = userSender;
    }

    public User getUserAddressee() {
        return userAddressee;
    }

    public void setUserAddressee(User userAddressee) {
        this.userAddressee = userAddressee;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createdOn=" + createdOn +
                ", userSender=" + userSender +
                ", userAddressee=" + userAddressee +
                '}';
    }
}
