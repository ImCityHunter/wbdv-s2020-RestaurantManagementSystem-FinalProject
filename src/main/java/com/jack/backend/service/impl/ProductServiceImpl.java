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
    public Product query(long id) {
        return productMapper.query(id);
    }

    @Override
    public List<Product> queryAll() {
        return productMapper.queryAll();
    }

    @Override
    public List<Product> queryAllByRestaurantId(Long restaurantId) {
        return productMapper.queryByRestaurant(restaurantId);
    }

    @Override
    public int addNewProduct(Product product) {
        return productMapper.save(product);
    }

    @Override
    public int update(Product product) {
        return productMapper.update(product);
    }

    @Override
    public int delete(long id) {
        return productMapper.delete(id);
    }


}
