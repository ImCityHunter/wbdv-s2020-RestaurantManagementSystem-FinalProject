package com.jack.backend.dao;

import com.jack.backend.models.Product;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductMapper {

    Product query(Long id);

    List<Product> queryAll();

    List<Product> queryAllProducts();

    List<Product> queryByRestaurant(Long restaurantId);

    int save(Product product);

    List<Product> queryByUserOrder(Long orderId);

    List<Product> queryByRestaurantOrder(Long orderId);

    int update(Product product);

    int delete(@Param("id") Long id);
}
