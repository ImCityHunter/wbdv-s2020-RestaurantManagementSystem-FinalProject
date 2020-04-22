package com.jack.backend.service;

import com.jack.backend.models.UserOrder;

import java.util.List;

public interface UserOrderService {
    int createOrder(UserOrder userOrder);

    List<UserOrder> getOrderByUser(Long userId);

    int saveOrderProduct(long orderId, long productId, int amount);
}
