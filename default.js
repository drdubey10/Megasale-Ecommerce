import products from "./constants/data.js";
import Product from "./database/productschema.js";
import mongoose from "mongoose";

const defaultData = ()=>{
    try{
        Product.insertMany(products);
        console.log("Data imported Successfully")

    }
    catch(err){
        console.log(err)

    }
}
export default defaultData;