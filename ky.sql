SET NAMES UTF8;#设置utf8
DROP DATABASE IF EXISTS ky;#丢弃
CREATE DATABASE ky CHARSET=UTF8;#创建ky
USE ky;#进入ky
/**创建用户表**/
CREATE TABLE ky_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(16),
    email VARCHAR(32),
    phone VARCHAR(16),
    avatar VARCHAR(128),      #头像
  user_name VARCHAR(32),      #真实姓名
  gender INT                 
);
INSERT INTO ky_user VALUES(null,'chenxing','cx123456','370646178@qq.com','15162675017','img/avatar/1.png','陈星','1');
INSERT INTO ky_user VALUES(null,'limei','lm654321','limei@163.com','15174561254','img/avatar/0.png','李梅','0');
INSERT INTO ky_user VALUES(null,'chenlong','cl741852963','chenlong@163.com','15174568412','img/avatar/1.png','陈龙','1');
/**创建首页轮播图表**/
CREATE TABLE ky_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
INSERT INTO ky_index_carousel VALUES (NULL, 'img/index/banner1.png','轮播电影1','1.html');
INSERT INTO ky_index_carousel VALUES (NULL, 'img/index/banner2.png','轮播电影2','2.html');
INSERT INTO ky_index_carousel VALUES (NULL, 'img/index/banner3.png','轮播电影3','3.html');
INSERT INTO ky_index_carousel VALUES (NULL, 'img/index/banner4.png','轮播电影4','4.html');
/**创建首页最热上映电影表**/
CREATE TABLE ky_hot_movie(
  img VARCHAR(128),
  title VARCHAR(64),
  synopsis VARCHAR(500),
  href VARCHAR(128),
  price DECIMAL(10,2)
);
INSERT INTO ky_hot_movie VALUES ('img/index/5.png','最热电影','电影简介','5.html','27.00');
/**创建首页部分正在上映电影表**/
CREATE TABLE ky_now_movie(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  synopsis VARCHAR(500),
  href VARCHAR(128)
);
INSERT INTO ky_now_movie VALUES (NULL,'img/index/6.png','正在上映电影1','电影简介','6.html');
INSERT INTO ky_now_movie VALUES (NULL,'img/index/7.png','正在上映电影2','电影简介','7.html');
INSERT INTO ky_now_movie VALUES (NULL,'img/index/8.png','正在上映电影3','电影简介','8.html');
INSERT INTO ky_now_movie VALUES (NULL,'img/index/9.png','正在上映电影4','电影简介','9.html');
INSERT INTO ky_now_movie VALUES (NULL,'img/index/10.png','正在上映电影5','电影简介','10.html');
INSERT INTO ky_now_movie VALUES (NULL,'img/index/11.png','正在上映电影6','电影简介','11.html');
/**创建首页部分即将上映电影表**/
CREATE TABLE ky_upcoming_movie(
   nid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  synopsis VARCHAR(500),
  showtime date,
  href VARCHAR(128)
);
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/12.png','即将上映电影1','电影简介','2019-8-8','12.html');
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/13.png','即将上映电影2','电影简介','2019-8-8','13.html');
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/14.png','即将上映电影3','电影简介','2019-8-8','14.html');
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/15.png','即将上映电影4','电影简介','2019-8-8','15.html');
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/16.png','即将上映电影5','电影简介','2019-8-8','16.html');
INSERT INTO ky_upcoming_movie VALUES (NULL,'img/index/17.png','即将上映电影6','电影简介','2019-8-8','17.html');
/**创建关注度表**/
CREATE TABLE ky_attention_movie(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  href VARCHAR(128),
  attention INT
);
INSERT INTO ky_attention_movie VALUES (NULL,'电影1','18.html','5000');
INSERT INTO ky_attention_movie VALUES (NULL,'电影2','19.html','4000');
INSERT INTO ky_attention_movie VALUES (NULL,'电影3','19.html','3000');
INSERT INTO ky_attention_movie VALUES (NULL,'电影4','20.html','2000');
INSERT INTO ky_attention_movie VALUES (NULL,'电影5','21.html','1000');
/**创建苏州影院表**/
CREATE TABLE ky_SZ_cinema(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  address VARCHAR(128),
  tel VARCHAR(20),
  price  DECIMAL(10,2)
);
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/19.png','地址1','0512-66902010','24.00');
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/20.png','地址2','0512-66902010','24.00');
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/21.png','地址3','0512-66902010','24.00');
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/22.png','地址4','0512-66902010','24.00');
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/23.png','地址5','0512-66902010','24.00');
/**创建上海影院表**/
CREATE TABLE ky_SH_cinema(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  address VARCHAR(128),
  tel VARCHAR(20),
  price  DECIMAL(10,2)
);
INSERT INTO ky_SH_cinema VALUES (NULL,'影院1','img/index/19.png','地址1','0512-66902010','24.00');
INSERT INTO ky_SH_cinema VALUES (NULL,'影院1','img/index/20.png','地址2','0512-66902010','24.00');
INSERT INTO ky_SH_cinema VALUES (NULL,'影院1','img/index/21.png','地址3','0512-66902010','24.00');
INSERT INTO ky_SH_cinema VALUES (NULL,'影院1','img/index/22.png','地址4','0512-66902010','24.00');
INSERT INTO ky_SH_cinema VALUES (NULL,'影院1','img/index/23.png','地址5','0512-66902010','24.00');
/**创建南京影院表**/
CREATE TABLE ky_NJ_cinema(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  address VARCHAR(128),
  tel VARCHAR(20),
  price  DECIMAL(10,2)
);
INSERT INTO ky_NJ_cinema VALUES (NULL,'影院1','img/index/19.png','地址1','0512-66902010','24.00');
INSERT INTO ky_NJ_cinema VALUES (NULL,'影院1','img/index/20.png','地址2','0512-66902010','24.00');
INSERT INTO ky_NJ_cinema VALUES (NULL,'影院1','img/index/21.png','地址3','0512-66902010','24.00');
INSERT INTO ky_NJ_cinema VALUES (NULL,'影院1','img/index/22.png','地址4','0512-66902010','24.00');
INSERT INTO ky_NJ_cinema VALUES (NULL,'影院1','img/index/23.png','地址5','0512-66902010','24.00');
/**创建常州影院表**/
CREATE TABLE CZ_SZ_cinema(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  img VARCHAR(128),
  address VARCHAR(128),
  tel VARCHAR(20),
  price  DECIMAL(10,2)
);
INSERT INTO ky_CZ_cinema VALUES (NULL,'影院1','img/index/19.png','地址1','0512-66902010','24.00');
INSERT INTO ky_CZ_cinema VALUES (NULL,'影院1','img/index/20.png','地址2','0512-66902010','24.00');
INSERT INTO ky_CZ_cinema VALUES (NULL,'影院1','img/index/21.png','地址3','0512-66902010','24.00');
INSERT INTO ky_CZ_cinema VALUES (NULL,'影院1','img/index/22.png','地址4','0512-66902010','24.00');
INSERT INTO ky_SZ_cinema VALUES (NULL,'影院1','img/index/23.png','地址5','0512-66902010','24.00');