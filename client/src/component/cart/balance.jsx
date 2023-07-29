import React from "react";
import { Box, Typography,styled } from "@mui/material";
import { useEffect } from "react";

const Wrapper = styled(Box)({
    marginleft : '400px'
})

function Balance({ cartItems }) {
    const [Price, setPrice] = React.useState(0);
    const [totalDiscount, setDiscount] = React.useState(0);
    const [noOfItems, setNoOfItems] = React.useState(0);

    useEffect(() => {
        totalAmount();
        totalItems();

    }, [cartItems]);
    const totalItems = () => {
        let ti = cartItems.length;
        setNoOfItems(ti);
    }

    const totalAmount = () => {
        let price = 0;
        let discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <Box style={{ background: 'white', border : "1px solid #f2f2f2"}}>
            <Wrapper>
                <Box >
                    <Typography><strong>&nbsp;&nbsp;&nbsp;&nbsp;Price Details</strong></Typography>
                </Box>
                <Box>
                    <Typography style={{ fontSize: "17px" }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;Price ({noOfItems} item)&nbsp;</strong>
                        <Box component="span"><strong>₹{Price}</strong> </Box>
                    </Typography>
                    <Typography> <strong>&nbsp;&nbsp;&nbsp;&nbsp;Discount</strong>
                        <Box component="span"><strong>- ₹{totalDiscount}</strong> </Box>
                    </Typography>
                    <Typography><strong>&nbsp;&nbsp;&nbsp;&nbsp;Delivery Charges-</strong>&nbsp;
                        <Box component="span"><strong>₹30</strong> </Box>
                    </Typography>
                    <Typography style={{ fontSize: "17px" }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;Total Amount-</strong>&nbsp;
                        <Box component="span"><strong>₹{Price - totalDiscount + 30}</strong> </Box>
                    </Typography>
                    <Typography style={{ color: "green" }}><strong>&nbsp;&nbsp;&nbsp;&nbsp;You will save ₹{totalDiscount - 30}</strong></Typography>
                </Box>


            </Wrapper>

        </Box>
    );
}
export default Balance;
// "#FF2D00"