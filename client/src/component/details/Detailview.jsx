import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box , Grid, styled } from "@mui/material";
import ActionItems from "./Actionitem";
import ProductDetail from "./Productdetail";
const Component = styled(Box)({
    background: '#f2f2f2',
})

const Container = styled(Grid)({
    background: '#ffffff',
    display: 'flex'
})
const RightContainer = styled(Grid)(({theme})=>({
    marginTop: '50px',
    paddingLeft: '200px',
    [theme.breakpoints.down('md')]:{
        paddingLeft: '80px'
    }
}));

const DetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading]);


    return (

        <Component>{
            product && Object.keys(product).length &&
            <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12} >
                    <ActionItems product={product}></ActionItems>

                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>

                    <ProductDetail product={product} />
                </RightContainer>

            </Container>

        }


        </Component>
    )
}

export default DetailView;