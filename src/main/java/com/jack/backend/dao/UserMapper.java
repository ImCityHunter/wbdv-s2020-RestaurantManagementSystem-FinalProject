package com.jack.backend.dao;

import com.jack.backend.models.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {

    User get(Long id);

    User login(@Param("username") String username, @Param("password") String password);

    int save(User user);

    int update(User user);
}
