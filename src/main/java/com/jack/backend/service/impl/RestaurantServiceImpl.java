package com.jack.backend.service.impl;

import com.jack.backend.dao.ProductMapper;
import com.jack.backend.dao.RestaurantMapper;
import com.jack.backend.models.Restaurant;
import com.jack.backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private RestaurantMapper restaurantMapper;
    private ProductMapper productMapper;

    @Resource
    public void setRestaurantMapper(RestaurantMapper restaurantMapper) {
        this.restaurantMapper = restaurantMapper;
    }

    @Resource
    public void setProductMapper(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    @Override
    public int save(Restaurant restaurant) {
        return restaurantMapper.save(restaurant);
    }

    @Override
    public Restaurant query(Long id) {
        return null;
    }

    @Override
    public List<Restaurant> queryAll() {
        return null;
    }
}
