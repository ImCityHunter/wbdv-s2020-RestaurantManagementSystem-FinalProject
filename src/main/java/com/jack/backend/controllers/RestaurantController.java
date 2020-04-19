package com.jack.backend.controllers;

import com.jack.backend.models.Product;
import com.jack.backend.models.Restaurant;
import com.jack.backend.service.ProductService;
import com.jack.backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private RestaurantService restaurantService;
    private ProductService productService;
    ;

    @Autowired
    public void setRestaurantService(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public Restaurant get(@PathVariable("id") Long id) {
        return restaurantService.query(id);
    }

    @GetMapping("/{id}/products")
    public List<Product> getAllProducts(@PathVariable("id") Long id) {
        return productService.queryAllByRestaurantId(id);
    }

    @PostMapping("/")
    public int createNewRestaurant(@RequestBody Restaurant restaurant) {
        int result = restaurantService.save(restaurant);
        return result;
    }/**/

    @PutMapping("/")
    public int updateRestaurant(@RequestBody Restaurant restaurant) {
        return 1;
    }
}
