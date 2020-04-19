package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Restaurant {
    private Long id;
    private String name;
    private String address;
}
