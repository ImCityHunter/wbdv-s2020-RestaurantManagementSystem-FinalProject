package com.jack.backend.dao;

import com.jack.backend.models.RestaurantOrder;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RestaurantOrderMapper {
    int save(RestaurantOrder order);

    RestaurantOrder query(Long id);

    List<RestaurantOrder> queryOrdersByRestaurantId(Long restaurantId);

    int saveOrderProduct(@Param("orderId") long orderId,
                         @Param("productId") long productId,
                         @Param("amount") int amount);

    int queryOrdersByRestaurantIdAndStatus(@Param("id") Long id, @Param("status") String status);
}
