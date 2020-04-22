package com.jack.backend.controllers;

import com.jack.backend.models.Product;
import com.jack.backend.models.RestaurantOrder;
import com.jack.backend.models.User;
import com.jack.backend.models.UserOrder;
import com.jack.backend.service.RestaurantOrderService;
import com.jack.backend.service.UserOrderService;
import com.jack.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController   // important 这里需要设置使用 restController
@RequestMapping("users")
@CrossOrigin("*")
public class UserController {

    private UserService userService;
    private UserOrderService userOrderService;
    private RestaurantOrderService restaurantOrderService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setUserOrderService(UserOrderService userOrderService) {
        this.userOrderService = userOrderService;
    }

    @Autowired
    public void setRestaurantOrderService(RestaurantOrderService restaurantOrderService) {
        this.restaurantOrderService = restaurantOrderService;
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable("userId") Long id) {
        User user = this.userService.findUserById(id);
        user.setPassword("***");
        System.out.println(user.toString());
        return user;
    }

    @GetMapping("/login")
    public User loginUser(@RequestParam("username") String username,
                          @RequestParam("password") String password) {
        User user = userService.login(username, password);
        if (null != user) {
            user.setPassword("xxx");
        }
        return user;
    }

    @PostMapping("/register")
    public int register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/update")
    public int update(@RequestBody User user) {
        return userService.update(user);
    }

    @PostMapping("/{id}/order")
    public int placeOrder(@RequestBody UserOrder order, @PathVariable("id") Long userId) {
        // wjc first save the order
        int result = userOrderService.createOrder(order);
        if (result == 0) {
            return result;
        }
        // wjc get all products in order
        List<Product> products = order.getProducts();
        for (Product product : products) {
            result = userOrderService.saveOrderProduct(order.getId(), product.getId(), product.getAmount());
            if (result == 0) {
                return result;
            }
        }
        // wjc sort products to different restaurants and save them
        Map<Long, RestaurantOrder> restaurantOrderMap = new HashMap<>();
        for (Product product : products) {
            Long id = product.getRestaurant().getId();
            if (restaurantOrderMap.containsKey(id)) {
                restaurantOrderMap.get(id).getProducts().add(product);
            } else {
                RestaurantOrder restaurantOrder = new RestaurantOrder();
                restaurantOrder.setDate(order.getDate());
                restaurantOrder.setRestaurant(product.getRestaurant());
                restaurantOrder.setType(order.getType());
                restaurantOrder.setCompleted(order.getCompleted());
                restaurantOrder.getProducts().add(product);
                restaurantOrderMap.put(id, restaurantOrder);
            }
        }
        for (RestaurantOrder restaurantOrder : restaurantOrderMap.values()) {
            float price = restaurantOrder.getProducts()
                    .stream()
                    .map(product -> product.getPrice())
                    .reduce(0f, (a, b) -> a + b);
            restaurantOrder.setTotalPrice(price);
            result = restaurantOrderService.saveOrder(restaurantOrder);
            if (result == 0) {
                return result;
            }
            for (Product product : restaurantOrder.getProducts()) {
                result = restaurantOrderService.saveRestaurantOrderProduct(
                        restaurantOrder.getId(),
                        product.getId(),
                        product.getAmount());
                if (result == 0) {
                    return result;
                }
            }
        }
        return 1;
    }

    @GetMapping("/{id}/orders")
    public List<UserOrder> getUserOrders(@PathVariable("id") long id) {
        return userOrderService.getOrderByUser(id);
    }

}
