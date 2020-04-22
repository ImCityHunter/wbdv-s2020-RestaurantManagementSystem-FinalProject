package com.jack.backend.dao;

import com.jack.backend.models.UserOrder;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserOrderMapper {
    int save(UserOrder userOrder);

    UserOrder query(Long id);

    List<UserOrder> queryByUserId(Long userId);

    int saveOrderProduct(@Param("orderId") long orderId,
                         @Param("productId") long productId,
                         @Param("amount") int amount);
}
