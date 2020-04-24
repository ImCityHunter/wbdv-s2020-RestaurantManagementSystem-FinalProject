# wbdv-spring2020-Team2-FinalProject
[Description](https://docs.google.com/document/d/15MdexRhb_bj57tCSDTYnTVwqin9Y62oLSSEQn9sO9ZE/edit) <br />

Teammates / Github: <br />
HoKang Yu, yu2749luca <br />
Jiangchuan Wang,  agreeableness <br />
Jinyang Zheng, Sjyzheng <br />
## Summary
This project uses material UI, and uses some of its template on its [website](https://material-ui.com/). We also uses an API from [RAPIDAPI](https://rapidapi.com/edamam/api/edamam-food-and-grocery-database).  <br />
Project is launched on Heroku at [here](https://restaurant-management-menu.herokuapp.com/customer) <br />


#### Restaurant Menu Management System

`Elevator Pitch`: Here and there, we see some restaurants willing to invest money to make their own apps to order food in store. But small restaurants still rely on using paper menus for in-store customers. We are designing a web for small restaurants owners to create their own digital menus for in-store customers. Thus, restaurants can log in to create their own menus. Customers will also create their own profile pages and they can view various restaurants’ menus when customers sit in, restaurants will give the customer an “id”  in order to order at that restaurant. 

#### Users: Customers/Restaurant Owners/Anonymous users
`Anonymous users`: able to see what regular customers can see, but cannot make the final order <br/>
`Customers`: able to add and order <br/>
`Restaurant Owners`: able to edit its' restaurant's name, menu, open hours, etc. <br/>


## Testing Information

#### Sample Accounts for front end

`customer`: username: customer, password: customer, type: customer <br />
`restuarnt`: username: foodmax, password: foodmax, type: restaurant <br />
specific information about an individual can be found in our backend <br />

After logging in, each type should have different ways to navigate the dashboard. customers shall have the same dashboard as anonymous users, and restaurant owners shall be able to see what items were sold today. For the restaurant owners, they can edit and change their menu.

#### BackEnd
Our backend uses mybatis. <br />
codes is [here](https://github.com/yu2749luca/wbdv-s2020-RestaurantManagementSystem-FinalProject/tree/backend)<br />
Use the following link to have visual: https://web5610-final-project-backend.herokuapp.com <br />
Add the following path after this above link to see specific data that you desire to see<br />

- Find Info about a specific Restaurant : use `1` as restaurant id to find info about foodmax <br/>
add `/restaurant/${restaurant_id}` <br />

- Find Info about all the orders of a restaurant: <br />
add `/restaurant/${restaurant_id}/orders` <br />

- Find Info about a specific Customer:  use `1` as user id <br />
add `/users/${user_id}` <br />





