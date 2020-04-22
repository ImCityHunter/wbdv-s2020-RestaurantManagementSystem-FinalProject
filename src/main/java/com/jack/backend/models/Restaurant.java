package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Restaurant {
    private Long id;
    private String username;
    private String password;
    private String restaurantName;
    private Long phoneNumber;
    private String email;
    private String address;
    private String description;
    private String businessHours;
    private List<String> formattedBusinessHours;
}
