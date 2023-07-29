import { Grid, Typography, Box, Button, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Balance from "./balance";
import Lottie from "lottie-react"
import EmptyCart from "../animations/EmptyCart.json"
import {payUsingPaytm} from '../../service/api';
import {post} from '../../utils/paytm.js'

const Componment = styled(Grid)({
    padding: '30px 135px'
})
// const Head = styled(Grid)({
//     padding: '15px 24px',

// })
const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginTop: '100px',
      width: '100%'
    },
  }));
  
const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);


    const buyNow = async () => {
        try {
            let response = await payUsingPaytm({ amount: 500, email: 'deepak@example.com' });
            let information = {
                action: 'https://securegw-stage.paytm.in/order/process',
                params: response
            };
            post(information);
        } catch (error) {
            console.error("Error while processing payment:", error);
        }
    };

    return (
        <>
            {
                cartItems.length > 0 ? (
                    <Componment container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Box >
                                <Typography style={{ fontSize: '22px', background: "white" }}><strong>&nbsp;&nbsp;&nbsp;My Cart ({cartItems.length})</strong></Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }


                            <Button variant="contained" onClick={() => buyNow()} style={{ background: "#FF2D00", color: "black", marginTop: '33px', width: '230px' }}><strong>Place Order</strong></Button>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <Wrapper>
                                <Balance cartItems={cartItems}></Balance>

                            </Wrapper>

                        </Grid>

                    </Componment>
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <Lottie style={{ height: "400px" }} animationData={EmptyCart} />
                        <Typography style={{
                            fontWeight: "bold",
                            fontSize: "30px",

                        }}>Your Cart is Empty</Typography>
                    </div>
                )}
        </>
    );
};

export default Cart;
