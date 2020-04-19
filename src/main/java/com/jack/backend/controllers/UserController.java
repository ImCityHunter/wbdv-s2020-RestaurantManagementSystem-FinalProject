package com.jack.backend.controllers;

import com.jack.backend.models.User;
import com.jack.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController   // important 这里需要设置使用 restController
@RequestMapping("users")
@CrossOrigin("*")
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable("userId") Long id) {
        User user = this.userService.findUserById(id);
        user.setPassword("***");
        System.out.println(user.toString());
        return user;
    }

    @GetMapping("/login")
    public User loginUser(@RequestParam("username") String username,
                          @RequestParam("password") String password) {
        User user = userService.login(username, password);
        if (null != user) {
            user.setId((long) Integer.MAX_VALUE);
            user.setPassword("xxx");
        }
        return user;
    }

    @PostMapping("/register")
    public int register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/update")
    public int update(@RequestBody User user) {
        return userService.update(user);
    }

}
