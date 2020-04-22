package com.jack.backend.service;

import com.jack.backend.models.RestaurantOrder;

import java.util.List;

public interface RestaurantOrderService {
    int saveOrder(RestaurantOrder order);

    List<RestaurantOrder> queryOrdersByRestaurantId(Long id);

    int saveRestaurantOrderProduct(Long orderId, Long productId, int amount);

    List<RestaurantOrder> queryOrdersByRestaurantIdAndStatus(Long id, String status);

    int orderComplete(Long restaurantId, Long orderId, String status);
}
