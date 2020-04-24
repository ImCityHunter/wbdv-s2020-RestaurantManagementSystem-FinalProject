# wbdv-s2020-HoKang-Yu-FinalProject
[Description](https://docs.google.com/document/d/15MdexRhb_bj57tCSDTYnTVwqin9Y62oLSSEQn9sO9ZE/edit) <br />

Teammates / Github: <br />
HoKang Yu, yu2749luca <br />
Jiangchuan Wang,  agreeableness <br />
Jinyang Zheng, Sjyzheng <br />
## Summary
This project uses material UI, and uses some of its template on its [website](https://material-ui.com/). We also uses an API from [RAPIDAPI](https://rapidapi.com/edamam/api/edamam-food-and-grocery-database).  <br />
Project is launched on Heroku at [here](https://restaurant-management-menu.herokuapp.com/customer) <br />


## Restaurant Menu Management System

`Elevator Pitch`: Here and there, we see some restaurants willing to invest money to make their own apps to order food in store. But small restaurants still rely on using paper menus for in-store customers. We are designing a web for small restaurants owners to create their own digital menus for in-store customers. Thus, restaurants can log in to create their own menus. Customers will also create their own profile pages and they can view various restaurants’ menus when customers sit in, restaurants will give the customer an “id”  in order to order at that restaurant. 

### Users: Customers/Restaurant Owners/Anonymous users
`Anonymous users`: able to see what regular customers can see, but cannot make the final order <br/>
`Customers`: able to add and order <br/>
`Restaurant Owners`: able to edit its' restaurant's name, menu, open hours, etc. <br/>


## Testing Information

### Sample Accounts

`customer`: username: customer, password: customer, type: customer <br />
`restuarnt`: username: foodmax, password: foodmax, type: restaurant <br />
specific information can be found in our backend <br />

### BackEnd
Our [backend](https://web5610-final-project-backend.herokuapp.com/) uses mybatis. <br />

Find Info about a specific Restaurant : use `1` as restaurant id to find info about foodmax <br/>
https://web5610-final-project-backend.herokuapp.com/restaurant/${restaurant_id}/orders <br/>

Find Info about a specific Customer: 

https://web5610-final-project-backend.herokuapp.com/users/${user_id} <br />





