package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class User {
    private Long id;
    private String username;
    private String password;
    private String nickname;
}
