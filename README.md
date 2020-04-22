drop table if exists restaurants;
create table restaurants
(
    id              bigint       not null auto_increment,
    username        varchar(50)  not null,
    password        varchar(50)  not null,
    restaurant_name varchar(50)  not null,
    phone_number    bigint(10)   not null,
    email           varchar(50)  not null,
    address         varchar(50)  not null,
    description     varchar(200) default null,
    business_hours  varchar(100) not null,
    primary key (id)
) engine = InnoDB
  character set = utf8
  auto_increment = 1;

drop table if exists products;
create table products
(
    id            bigint         not null auto_increment,
    name          varchar(50)    not null,
    price         decimal(10, 2) not null,
    category      varchar(50)    not null,
    calories      varchar(50)    not null,
    ingredient    varchar(200)   not null,
    description   varchar(200)   not null,
    restaurant_id bigint         not null,
    primary key (id)
) engine = InnoDB
  character set = utf8,
  auto_increment = 1;

drop table if exists restaurant_order;
create table restaurant_order
(
    id            bigint         not null auto_increment,
    date          Date           not null,
    restaurant_id bigint         not null,
    total_price   decimal(10, 2) not null,
    type          varchar(10)    not null,
    completed     varchar(10)    not null,
    primary key (id)
) engine = InnoDB
  character set = utf8
  auto_increment = 1;

drop table if exists user_order;
create table user_order
(
    id          bigint         not null auto_increment,
    date        Date           not null,
    user_id     bigint         not null,
    total_price decimal(10, 2) not null,
    type        varchar(10)    not null,
    completed   varchar(10)    not null,
    primary key (id)
) engine = InnoDB
  character set = utf8
  auto_increment = 1;

drop table if exists restaurant_order_product;
create table restaurant_order_product
(
    order_id   bigint  not null,
    product_id bigint  not null,
    amount     integer not null
) engine = InnoDB
  character set = utf8;

drop table if exists user_order_product;
create table user_order_product
(
    order_id   bigint  not null,
    product_id bigint  not null,
    amount     integer not null
) engine = InnoDB
  character set = utf8;
  
  
  create table users
  (
      id       bigint      not null auto_increment,
      username varchar(50) not null,
      password varchar(50) not null,
      nickname varchar(50) not null,
      primary key (id)
  ) engine = InnoDB
    character set = utf8
    auto_increment = 1;