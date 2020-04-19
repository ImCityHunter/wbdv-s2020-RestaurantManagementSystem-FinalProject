package com.jack.backend.service.impl;

import com.jack.backend.dao.UserMapper;
import com.jack.backend.models.User;
import com.jack.backend.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Override
    public User login(String username, String password) {
        return userMapper.login(username, password);
    }

    @Override
    public int register(User user) {
        return userMapper.save(user);
    }

    @Override
    public int update(User newUser) {
        return userMapper.update(newUser);
    }

    @Override
    public User findUserById(Long id) {
        return userMapper.get(id);
    }
}
