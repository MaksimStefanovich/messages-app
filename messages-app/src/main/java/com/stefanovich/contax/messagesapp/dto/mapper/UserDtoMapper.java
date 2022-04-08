package com.stefanovich.contax.messagesapp.dto.mapper;

import com.stefanovich.contax.messagesapp.dto.UserDto;
import com.stefanovich.contax.messagesapp.model.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDtoMapper {
    private final ModelMapper modelMapper;

    public UserDto convertToUserDto(User user) {
        UserDto userDto = modelMapper
                .map(user, UserDto.class);
        userDto.setName(user.getName());
        return userDto;
    }
}