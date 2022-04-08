package com.stefanovich.contax.messagesapp.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
public class UserDto {
    @NotBlank(message = "Message should have at least 1 character ")
    private String name;
}
