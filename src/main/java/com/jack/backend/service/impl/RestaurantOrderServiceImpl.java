package com.jack.backend.service.impl;

import com.jack.backend.dao.RestaurantOrderMapper;
import com.jack.backend.models.RestaurantOrder;
import com.jack.backend.service.RestaurantOrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RestaurantOrderServiceImpl implements RestaurantOrderService {

    @Resource
    private RestaurantOrderMapper restaurantOrderMapper;

    @Override
    public int saveOrder(RestaurantOrder order) {
        return restaurantOrderMapper.save(order);
    }

    @Override
    public List<RestaurantOrder> queryOrdersByRestaurantId(Long id) {
        return restaurantOrderMapper.queryOrdersByRestaurantId(id);
    }

    @Override
    public int saveRestaurantOrderProduct(Long orderId, Long productId, int amount) {
        return restaurantOrderMapper.saveOrderProduct(orderId, productId, amount);
    }

    @Override
    public List<RestaurantOrder> queryOrdersByRestaurantIdAndStatus(Long id, String status) {
        return restaurantOrderMapper.queryOrdersByRestaurantIdAndStatus(id, status);
    }

    @Override
    public int orderComplete(Long restaurantId, Long orderId, String status) {
        return restaurantOrderMapper.updateOrderStatus(orderId, status);
    }
}
