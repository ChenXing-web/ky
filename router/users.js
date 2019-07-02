const express=require('express');
//引入连接池
const pool=require('../pool.js');
var router=express.Router();
//1.注册路由
router.post('/reg',function(req,res){
	//获取post请求的数据
	var obj=req.body;
	//验证每一项是否为空
	//如果用户名为空
	if(!obj.uname){
		res.send({code:401,msg:'uname required'});
		//结束函数执行
		return;
	}
    if(!obj.upwd){
		res.send({code:402,msg:'upwd required'});
		//结束函数执行
		return;
	}
    if(!obj.phone){
		res.send({code:403,msg:'phone required'});
		//结束函数执行
		return;
	}
    if(!obj.email){
		res.send({code:404,msg:'email required'});
		//结束函数执行
		return;
    }
    if(!obj.user_name){
		res.send({code:405,msg:'user_name required'});
		//结束函数执行
		return;
    }
    if(!obj.gender){
		res.send({code:406,msg:'gender required'});
		//结束函数执行
		return;
	}
	//执行SQL语句
	pool.query('INSERT INTO ky_user SET ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		//如果插入成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg suc'});
		}
	});
});
//2.登录路由
router.post('/login',function(req,res){
	//2.1获取数据
    var obj=req.body;
	console.log(obj);
    //2.2验证数据是否为空
	if(!obj.uname){
    res.send({code:401,msg:'uname required'});
		//结束函数执行
		return;
	};
    if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
		//结束函数执行
		return;
	};
    //2.3执行SQL语句
    //查询是否有用户和密码同时的数据
    pool.query('SELECT * FROM ky_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
        if(err) throw err;
		console.log(result);
		//判断登录成功还是失败
		if(result.length>0){
			res.send({code:200,msg:'login suc'});
		}else {//没有元素失败
			res.send({code:201,msg:'uname or upwd err '});
		}

});
});
//3.检索用户路由
router.get('/detail',function(req,res){
	//获取数据
    var obj=req.query;
	  console.log(obj);
	  //验证数据是否为空
    if(!obj.uid){
    res.send({code:401,msg:'uid required'});
		//结束函数执行
		return;
	}
	//执行SQL语句
	pool.query('SELECT * FROM ky_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
	res.send(result);
	});
});
//4.修改用户路由
router.post('/update',function(req,res){
	//4.1获取数据
    var obj=req.body;
	console.log(obj);
    //2.2验证数据是否为空
	//遍历对象，访问每个属性
	var i=400;
	for(var key in obj){
		i++;
		//如果属性值为空，提示属性值必须
	if(!obj[key]){
    res.send({code:i,msg:key+' required'});
		//结束函数执行
		return;
	}; 
	}
	//执行SQL语句
	//取出用户编号
	var uid=obj.uid;
	//删除对象中的编号属性
	delete obj.uid;
    pool.query('UPDATE ky_user SET ? WHERE uid=?',[obj,uid],function(err,result){
    if(err) throw err;
		console.log(result);
		//判断成功还是失败
		if(result.affectedRows>0){
			res.send({code:200,msg:'update suc'});
		}else {//没有元素失败
			res.send({code:201,msg:'update error'});
		}
})
});
//5.用户列表路由
router.get('/list',function(req,res){
	//获取数据
    var obj=req.query;
	  //console.log(obj);
    var count=obj.count;
    var pno=obj.pno;
	  //验证数据是否为空
    if(!count){
		count=2;
	}
    if(!pno){
		pno=1;
	}
	//转整型
	count=parseInt(count);
	pno=parseInt(pno);
	var start=(pno-1)*count;
	//执行SQL语句
    pool.query('SELECT * FROM ky_user LIMIT ?,?',[start,count],function(err,result){
    if(err) throw err;
	res.send(result);
       
	});

	});
//6.删除用户路由
router.get('/delete',function(req,res){
	//获取数据
    var obj=req.query;
	  console.log(obj);
	  //验证数据是否为空
    if(!obj.uid){
    res.send({code:401,msg:'uid required'});
		//结束函数执行
		return;
	}
	//执行SQL语句
	pool.query('DELETE FROM ky_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
			res.send({code:200,msg:'delete suc'});
		}else {
			res.send({code:201,msg:'delete error'});
		}

	});
});
//导出路由器对象
module.exports=router;
