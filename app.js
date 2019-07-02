//引入express
const express=require('express');
const userRouter=require('./router/users')
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
//设置监听接口
app.listen(8080);
app.use(express.static('public'));
//使用body
app.use(bodyParser.urlencoded({
	extended:false
}));
//使用user路由器
app.use('/user',userRouter);


