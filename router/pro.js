const express=require('express');
//�������ӳ�ģ��
const pool=require('../pool.js');
//����·��������
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
//2.userlist ��get����Ҫ����
router.get("/v1/userlist",(req,res)=>{
	var sql="select * from ky_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//3.����uidɾ���û�
router.delete("/v1/deluser/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from ky_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		 res.send("1");
	});
});
//4.����·��
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
//5.�޸��û���Ϣ�Ľӿ� put
//put���������ϸ�postһ��
router.put("/v1/updateuser",(req,res)=>{
//1.����ǰ�˴�����������
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
//2.дsql���
	var sql="update ky_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";
//3.���ӳؽ������ݲ���
    pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});

});
//6.ע��·��
router.post("/v1/reg",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
//2.дsql���
	var sql="insert into ky_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=?";
//3.���ӳؽ������ݲ���
    pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});

});
module.exports=router;