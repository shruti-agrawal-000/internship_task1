const express = require("express");
// const mysql = require("mysql");
const userRouter = require("./routes/user.router");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT;
console.log("user",process.env.DB_USER);

// //create connection
// const db = mysql.createConnection({
//     host:"localhost",
//     user:'root',
//     password:'root',
//     database:'nodemysql'
// });

// //connect
// db.connect((err)=>{
//   if(err){
//       throw err;
//   }
//   console.log('MySql Connected....');
// });

// //create db
// app.get('/createdb',(req,res)=>{
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql,(err,result)=>{
//         if(err)  throw err;
//         console.log("result",result);
//         res.send('Database created...')
//     });
// });

// //create table
// // app.get('/createtableproducts',(req,res)=>{
// //     let sql = 'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR(50), price DECIMAL(2), doa DATETIME, is_active enum ,)'; 
// //     db.query(sql,(err,result)=>{
// //         if(err) throw err;
// //         console.log(result);
// //         res.send('Products table created...');
// //     });
// // });


// //create table
// app.get('/createpoststable',(req,res)=>{
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'; 
//     db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });

// //add posts
// app.get('/addpost1',(req,res)=>{
//     let post = {title:"Post One",body:'this is first post'};
//     let sql = 'INSERT INTO posts SET ?';
//     let query = db.query(sql,post,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Post1 created...');
//     })
// });

// //select posts
// app.get('/getposts',(req,res)=>{
    
//     let sql = 'SELECT * FROM posts';
//     let query = db.query(sql,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         res.send('Posts fetched...');
//     });
// });

// //select single post
// app.get('/getpost/:id',(req,res)=>{
    
//     let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Post fetched...');
//     });
// });

// //update posts
// app.get('/updatepost/:id',(req,res)=>{
//     let newTitle = "updated title"
//     let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//     let query = db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Post updated...');
//     });
// });

// //delete posts
// app.get('/deletepost/:id',(req,res)=>{
//     let newTitle = "updated title"
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//     let query = db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Post deleted...');
//     });
// });

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(PORT,()=>{
    console.log(`server is up on port ${PORT}`);
})