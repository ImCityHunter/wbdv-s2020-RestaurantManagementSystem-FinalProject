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
    private Float price;
    private String category;
    private String calories;
    private String ingredient;
    private String description;
    private Restaurant restaurant;
    private int amount;
    private String img;
}
