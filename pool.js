//引入mysql数据库
const mysql=require('mysql');
//创建连接池
var pool=mysql.creatrPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password：'',
    database:'ky',
    connectionLimit:20
});
//导出连接池对象
module.exports=pool;