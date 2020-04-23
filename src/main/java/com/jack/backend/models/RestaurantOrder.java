package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class RestaurantOrder {
    private Long id;
    private Date date;
    private Restaurant restaurant;
    private Float totalPrice;
    private String type;
    private String completed;
    private List<Product> products = new ArrayList<>();
}
