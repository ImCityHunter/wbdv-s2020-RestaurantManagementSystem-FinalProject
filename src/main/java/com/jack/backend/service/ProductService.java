package com.jack.backend.service;

import com.jack.backend.models.Product;

import java.util.List;

public interface ProductService {
    Product query(long id);

    List<Product> queryAll();

    List<Product> queryAllByRestaurantId(Long restaurantId);

    int addNewProduct(Product product);

    int update(Product product);

    int delete(long id);
}
