const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into user(name, phone, email,password,is_Active) 
                values(?,?,?,?,?)`,
      [
        data.name,
        data.phone,
        data.email,
        data.password,
        data.is_Active
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,name, phone, email,password,doa,is_Active from user where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,name,phone,email,password,doa,is_Active from user`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user set name=?, phone=?, email=?, password=?,  is_Active=? where id = ?`,
      [
        data.name,
        data.phone,
        data.email,
        data.password,
        data.is_Active,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deactivateUser:(data,callBack)=>{
    pool.query(
      `update user set  is_Active=? where id = ?`,
      [
        data.is_Active,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};