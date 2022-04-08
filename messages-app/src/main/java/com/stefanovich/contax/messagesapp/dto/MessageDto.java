package com.stefanovich.contax.messagesapp.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class MessageDto {
    @NotBlank(message = "Message should have at least 1 character ")
    private String content;
    @NotNull
    private Long userSenderId;
    @NotNull
    private Long userAddresseeId;
}
