const pool = require("../config/database");

const addProductService=(data,callBack)=>{
    try {
        pool.query(
            `insert into product(name,price,is_Active) 
                      values(?,?,?)`,
            [
              data.name,
              data.price,
              data.is_Active
            ],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
          );
    } catch (error) {
        console.log("error",error);
    }
};

const getAllProducts = (callBack) => {
  try {
    pool.query(
      `select id,name,price,doa,is_Active from product`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  } catch (error) {
    console.log("error",error);
  }
};

const updateProduct = (data,callBack) => {
  try {
    pool.query(
      `update product set name=?, price =? where id = ?`,
      [
        data.name,
        data.price,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
    
  } catch (error) {
    console.log("error",error)
    
  }
};

const deactivateProduct = (data,callBack) =>{
 try {
  pool.query(
    `update product set is_Active = ? where id = ?`,
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
    
 } catch (error) {
   console.log("error",error)
   
 }
};

const deleteProduct = (data,callBack) =>{
 try {
  pool.query(
    `delete from product where id = ?`,
    [data.id],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
 } catch (error) {
   console.log("error",error)
   
 }
};

module.exports={
    addProductService,
    getAllProducts,
    updateProduct,
    deactivateProduct,
    deleteProduct
}