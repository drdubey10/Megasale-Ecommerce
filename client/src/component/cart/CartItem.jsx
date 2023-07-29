import React from "react";
import { Box, Button, Typography, styled } from '@mui/material';
import { TextTrim } from "../../utils/utils";
import ButtonCart from "./buttongroup";
import {removeFromCart} from '../../redux/actions/cartActions'
import { useDispatch } from "react-redux";

const Componment = styled(Box)({
    // borderTop: '1px solid #f2f2f2',
    display: 'flex',
    // marginTop:'10px',
    paddingTop: '10px',
    background: 'white'
})
const LeftComponent = styled(Box)({
    margin: '20px'
})
const TitleComponent = styled(Typography)({
    fontWeight: 'bold',
})
function CartItem({ item }) {
    const dispatch = useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    return (
        <Componment >
            <LeftComponent>
                <img src={item.url} style= {{height :'110px', width: '110px'}}alt="productimage"></img>
                {/* <ButtonCart/> */}
            </LeftComponent>
            <Box>
                <TitleComponent>{TextTrim(item.title.longTitle)}</TitleComponent>
                <Typography>
                    <Box component='span'><strong>₹{item.price.cost}</strong></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' ><strike>₹{item.price.mrp}</strike></Box>
                    <Box component='span'>&nbsp;<Typography style={{color : "green"}}>{item.price.discount}off</Typography></Box>
                </Typography>

                <Button variant="contained" style={{ background : "white",color: "black", marginTop: '33px', width: '130px'}} onClick={()=>removeItemFromCart(item.id)}><strong>Remove</strong></Button>
            </Box>
        </Componment>

    )
}
export default CartItem;