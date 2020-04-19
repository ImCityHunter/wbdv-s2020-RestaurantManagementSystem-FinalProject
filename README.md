# Project
this project is used for Web-CS5610.
## Database configuration
## User Table
please run the following commands:
`
drop table if exists users;
create table users
(
    id bigint not null auto_increment,
    username varchar(20) not null,
    password varchar(50) not null,
    nickname varchar(20) not null,
    primary key (id)
) engine=InnoDB character set=utf8
`

## Products table
`
drop table if exists products;
create table products
(
    id bigint not null auto_increment,
    description varchar(100) not null,
    price varchar(10) not null,
    category varchar(20) not null,
    restaurant_id bigint not null,
    primary key (id)
) engine=InnoDB character set=utf8
`

## Restaurants table
`
drop table if exists restaurants;
create table restaurants
(
    id bigint not null auto_increment,
    name varchar(20) not null,
    address varchar(50) not null,
    primary key (id)
) engine=InnoDB character set=utf8
`

## Configure the database
### <strong> IN application.properties file
`
spring.datasource.name=web_backend
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/web_backend?serverTimezone=UTC&characterEncoding=utf8&autoReconnect=true&useSSL=false&allowMultiQueries=true
spring.datasource.username=root
spring.datasource.password=xxxxxx
# mybatis mappers location
mybatis.mapper-locations=classpath:mappers/*Mapper.xml
`