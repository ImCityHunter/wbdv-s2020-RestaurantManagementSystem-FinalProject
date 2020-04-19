package com.jack.backend.dao;

import com.jack.backend.models.Product;

import java.util.List;

public interface ProductMapper {

    Product query(Long id);

    List<Product> queryAll();

    List<Product> queryByRestaurant(Long restaurantId);

    int save(Product product);
}
