package com.jack.backend.dao;

import com.jack.backend.models.Restaurant;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RestaurantMapper {
    int save(Restaurant restaurant);

    int update(Restaurant restaurant);

    /*wjc query 得到 restaurant 的 基本信息*/
    Restaurant query(Long id);

    Restaurant login(@Param("username") String username, @Param("password") String password);

    List<Restaurant> queryAll();
}
