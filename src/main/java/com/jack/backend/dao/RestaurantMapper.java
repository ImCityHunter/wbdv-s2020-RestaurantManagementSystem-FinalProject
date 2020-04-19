package com.jack.backend.dao;

import com.jack.backend.models.Restaurant;

public interface RestaurantMapper {
    int save(Restaurant restaurant);

    int update(Restaurant restaurant);

    Restaurant query(Long id);
}
