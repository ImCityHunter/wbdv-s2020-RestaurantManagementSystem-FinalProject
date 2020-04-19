package com.jack.backend.service.impl;

import com.jack.backend.dao.ProductMapper;
import com.jack.backend.models.Product;
import com.jack.backend.service.ProductService;
import com.jack.backend.service.RestaurantService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductMapper productMapper;
    private RestaurantService restaurantService;

    @Resource
    public void setProductMapper(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    @Resource
    public void setRestaurantService(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @Override
    public Product query(Long id) {
        return null;
    }

    @Override
    public List<Product> queryAll() {
        return null;
    }

    @Override
    public List<Product> queryAllByRestaurantId(Long restaurantId) {
        return null;
    }

    @Override
    public int addNewProduct(Product product) {
        return productMapper.save(product);
    }
}
