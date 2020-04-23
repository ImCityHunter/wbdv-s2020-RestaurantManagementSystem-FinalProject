package com.jack.backend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@ToString
public class UserOrder {
    private Long id;
    private Date date;
    private User user;
    private Float totalPrice;
    private String type;
    private String completed;
    private List<Product> products = new ArrayList<>();
}
