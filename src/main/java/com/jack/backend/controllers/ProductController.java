package com.jack.backend.controllers;

import com.jack.backend.models.Product;
import com.jack.backend.service.ProductService;
import com.jack.backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {

    private ProductService productService;
    private RestaurantService restaurantService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @Autowired
    public void setRestaurantService(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.query(id);
    }

    @GetMapping("/all")
    public List<Product> getAllProducts() {
        System.out.println("query all products");
        return productService.queryAll();
    }

    @PostMapping("/")
    public Product addNewProduct(@RequestBody Product product) {
        int result = productService.addNewProduct(product);
        return product;
    }

    @PutMapping("/{id}")
    public int updateProduct(@PathVariable("id") Long id, @RequestBody Product product) {
        product.setId(id);
        return productService.update(product);
    }

    @DeleteMapping("/{id}")
    public int deleteProduct(@PathVariable("id") long id) {
        return productService.delete(id);
    }
}
