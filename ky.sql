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

