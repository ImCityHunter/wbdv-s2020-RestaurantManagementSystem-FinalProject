package com.jack.backend.service.impl;

import com.jack.backend.dao.UserOrderMapper;
import com.jack.backend.models.UserOrder;
import com.jack.backend.service.UserOrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserOrderServiceImpl implements UserOrderService {

    private UserOrderMapper userOrderMapper;

    @Resource
    public void setUserOrderMapper(UserOrderMapper userOrderMapper) {
        this.userOrderMapper = userOrderMapper;
    }

    @Override
    public int createOrder(UserOrder userOrder) {
        return userOrderMapper.save(userOrder);
    }

    @Override
    public List<UserOrder> getOrderByUser(Long userId) {
        return userOrderMapper.queryByUserId(userId);
    }

    @Override
    public int saveOrderProduct(long orderId, long productId, int amount) {
        return userOrderMapper.saveOrderProduct(orderId, productId, amount);
    }
}
