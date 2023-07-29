import React from "react";
import { useEffect } from "react";
import ProductTile from "./productTile";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions/productActions';

function AllProduct() {


    const { products } = useSelector(state => state.getProducts);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])
    return (
        <Grid container style={{textAlign: "center"}} >
            {
                products.map(products => (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ProductTile products={products} />
                    </Grid>

                ))
            }
            </Grid>
    )
}
export default AllProduct;
