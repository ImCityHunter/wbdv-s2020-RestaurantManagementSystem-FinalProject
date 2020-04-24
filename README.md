# wbdv-spring2020-Team2-FinalProject

[Description](https://docs.google.com/document/d/15MdexRhb_bj57tCSDTYnTVwqin9Y62oLSSEQn9sO9ZE/edit) <br />

Project Name: Restaurant Menu Management System <br />

Teammates / Github: <br />
HoKang Yu, yu2749luca <br />
Jiangchuan Wang,  agreeableness (Project Leader)<br />
Jinyang Zheng, Sjyzheng <br />

## Summary
This project uses material UI, and uses some of its template on its [website](https://material-ui.com/). We also uses an API from [RAPIDAPI](https://rapidapi.com/edamam/api/edamam-food-and-grocery-database) to retrieve some information about a searched meal.  <br />
This project is launched on Heroku at [here](https://restaurant-management-menu.herokuapp.com/customer). We have also found out that there are few functions that run perfectly when run locally, but act weird on heroku. We are doing our best to overcome. <br />
Our [privacy policy](https://docs.google.com/document/d/1z280aM4mzfZEtvh9HQbIw5yPesEgzk-D3D3yEQ1pdv0/edit) is also written; howevever, due to simplicity of grading and checking bugs, we took out the encryption and decryption for password. <br />

#### The reasons we use a third party API
We use a third party API, [Edamam Food and Grocery Database](https://rapidapi.com/edamam/api/edamam-food-and-grocery-database). This API contains a lot of information regarding to meals around the world. This API is used to help restaurants to build their menu faster. This API contains information about a meal's ingredient, image, food calories, etc. 

#### Elevator Pitch
Here and there, we see some restaurants willing to invest money to make their own apps to order food in store. But small restaurants still rely on using paper menus for in-store customers. We are designing a web for small restaurants owners to create their own digital menus for in-store customers. Thus, restaurants can log in to create their own menus. Customers will also create their own profile pages and they can view various restaurants’ menus when customers sit in, restaurants will give the customer an “id”  in order to order at that restaurant. 

#### Users: Customers/Restaurant Owners/Anonymous users
`Anonymous users`: able to see what regular customers can see, but cannot make the final order <br/>
`Customers`: able to add an order <br/>
`Restaurant Owners`: able to edit its' restaurant's name, menu, open hours, etc. We uses an API as listed above to help restuarant owner to find template of its meal's default information. However, we also allows restaurants owners to change those information. And all the information is then added our database <br/>
At the moment, as our current design, after registration, restaurant and customers are not interchangeable. This means, if an account is 'customer', it cannot switch to 'restaurant'. <br/>



## Testing Information

#### Sample Accounts for front end
`Anonymous users`: even without logging in, the url will be redirected to `/customer`, but is not allowed to make any orders <br/>
`customer`: username: customer, password: customer, type: customer <br />
`restuarnt`: username: foodmax, password: foodmax, type: restaurant <br />
specific information about an individual can be found in our backend <br />

After logging in, each type should have different ways to navigate the dashboard. customers shall have the same dashboard as anonymous users, and restaurant owners shall be able to see what items were sold today. For the restaurant owners, they can edit and change their menu.


** special notes ** <br/>
We do have a payment page, it is just a template, do not submit your real information. <br />

### How two types of users interact with each other
Customers can only order meals that have been created by restaurants. In depth information on how to test this is described in a paragraph below. Anonymous users are only cable of seeing the meals but cannot make an order. If an anonymous user want to order after viewing the meals, he/she will be prompted to register. <br />

#### Instructions on how to test and view result of orders 

- Step I: Open two different browswers such as chrome, incognito, firefox, safari <br/>
- Step II: Use google chrome to log in as customer (username: customer, password: customer). Use Safari/Firefox to log in as restaurant (username: restaurant, password: restaurant) <br />
- Step III: Use customer's page to order random stuffs on its homepage. At the moment, all the products on homepage are from foodmax's. Finish the shopping cart and payment. <br />
- Step IV: Use the other as restaurant, and click "orders" from the left bar, and you will see the newest/incomplete orders, and click the 'nike check' to mark as completed. The orders at the tops are all incomplete (if any), and at the bottom are the completed ones <br />

All the incomplete orders for foodmax can be found here: <br />
`https://web5610-final-project-backend.herokuapp.com/restaurant/1/orders/incomplete`  <br />

And vice versa, checking the completed orders for foodmax can be found here: <br />
`https://web5610-final-project-backend.herokuapp.com/restaurant/1/orders/completed`

Instruction on how to access and view our backend is discussed below <br />



#### BackEnd
Our backend uses mybatis. <br />
codes is [here](https://github.com/yu2749luca/wbdv-s2020-RestaurantManagementSystem-FinalProject/tree/backend)<br />
Use the following link to have visual: https://web5610-final-project-backend.herokuapp.com <br />
Add the following path after this above link to see specific data that you desire to see<br />

- Restaurant
  - Find Info about a specific Restaurant : use `1` as restaurant id to find info about foodmax <br/>
   add `/restaurant/${restaurant_id}` <br />

  - Find Info about all the orders of a restaurant: <br />
  add `/restaurant/${restaurant_id}/orders` <br />

  - Find Menu about all the menu items of a restaruant <br />
  add `/restaurant/${rid}/products` <br />

- Customer
  - Find Info about a specific Customer:  use `6` as user id <br />
  add `/users/${user_id}` <br />
  
- Meal/Product  
  - Find Info about all products <br />
  add `/products/all` <br />

  - Find Info about a specific item/meal/product: use `151` as an sample <br />
  add `/products/${product_id}`


#### Database
Our database is therefore also launched on heroku. The specific information is here `jdbc:mysql://us-cdbr-iron-east-01.cleardb.net/heroku_0a098ba37876f06serverTimezone=UTC&characterEncoding=utf8&autoReconnect=true&useSSL=false&allowMultiQueries=true`


## Future Improvement
There are several features that we'd like to add in the future, but not a priority at the moment comparing to fixing some bugs. <br />

- First: adding a notification for a restaurant, after recieving a new order <br />
- Second: at the moment, a customer can make a order from multiple restaurants. in the future, an order from a customer should be only related to one restaurant. <br />



