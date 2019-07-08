const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
router.get("/v1/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
        
    var sql="select * from ky_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
	if(result.length>0){
	  res.send("1");
	}else{
	  res.send("0");
	}
});
});
//2.userlist 查get不需要参数
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from ky_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//3.根据uid删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from ky_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		 res.send("1");
	});
});
//4.查找路由
router.get("/v1/queryuser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="select * from ky_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(result.length>0){
		res.send(result);
		}else{
		res.send("0");
		}
	});
});
//5.修改用户信息的接口 put
//put方法基本上跟post一样
router.put("/v1/updateuser",(req,res)=>{
//1.接收前端传过来的数据
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
//2.写sql语句
	var sql="update ky_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";
//3.连接池进行数据操作
    pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});

});
//6.注册路由
router.post("/v1/reg",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
//2.写sql语句
	var sql="insert into ky_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=?";
//3.连接池进行数据操作
    pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});

});
module.exports=router;