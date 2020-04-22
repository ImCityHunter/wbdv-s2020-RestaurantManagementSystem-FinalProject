package com.jack.backend.service;

import com.jack.backend.models.Restaurant;

import java.util.List;

public interface RestaurantService {
    Restaurant save(Restaurant restaurant);

    Restaurant query(Long id);

    List<Restaurant> queryAll();

    Restaurant login(String username, String password);

    Restaurant register(Restaurant restaurant);
}