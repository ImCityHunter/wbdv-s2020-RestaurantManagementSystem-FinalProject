package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Product {
    private Long id;
    private String name;
    private String description;
    private String price;
    private String category;
    private Restaurant restaurant;
}
