package com.jack.backend.service;

import com.jack.backend.models.User;

public interface UserService {
    User login(String username, String password);

    int register(User user);

    int update(User newUser);

    User findUserById(Long id);
}
