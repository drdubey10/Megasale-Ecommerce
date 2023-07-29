import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)({
    minWidth: '40%',
    padding: '40px 0 0 80px',
})
const Image = styled('img')({
    padding: '15px'
})
const StyledButton = styled(Button)({
    width: '48%',
    height: '50px'
})

const ActionItems = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState('1')
    const { id } = product;

    function addItemToCart() {
        dispatch(addToCart(id, quantity));
        navigate('/cart');

    }

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
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0 ',
                width: '90%'

            }}>
                <Image src={product.detailUrl} alt="product"></Image>
            </Box>
            <StyledButton variant="contained" onClick={addItemToCart} style={{ marginRight: '10px', background: 'White', color: 'black' }}><ShoppingCartIcon /><strong>Add to Cart</strong></StyledButton>
            <StyledButton variant="contained" onClick={() => buyNow()} style={{ background: "#fb541b" }}><FlashOnIcon /><strong>Buy Now</strong></StyledButton>
        </LeftContainer>
    )
}
export default ActionItems;


// import React from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
// import { Box, Button, styled } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/actions/cartActions";
// import { payUsingPaytm } from "../../service/api";
// import { post } from "../../utils/paytm";

// const LeftContainer = styled(Box)({
//     minWidth: '40%',
//     padding: '40px 0 0 80px',
// });

// const Image = styled('img')({
//     padding: '15px'
// });

// const StyledButton = styled(Button)({
//     width: '48%',
//     height: '50px'
// });

// const ActionItems = ({ product }) => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [quantity, setQuantity] = React.useState('1');
//     const { id } = product;

//     function addItemToCart() {
//         dispatch(addToCart(id, quantity));
//         navigate('/cart');
//     }

//     const buyNow = async () => {
//         try {
//             let response = await payUsingPaytm({ amount: 500, email: 'deepak@example.com' });
//             let information = {
//                 action: 'https://securegw-stage.paytm.in/order/process',
//                 params: response
//             };
//             post(information);
//         } catch (error) {
//             console.error("Error while processing payment:", error);
//         }
//     };

//     return (
//         <LeftContainer>
//             <Box style={{
//                 padding: '15px 20px',
//                 border: '1px solid #f0f0f0',
//                 width: '90%'
//             }}>
//                 <Image src={product.detailUrl} alt="product" />
//             </Box>
//             <StyledButton variant="contained" onClick={addItemToCart} style={{ marginRight: '10px', background: 'White', color: 'black' }}>
//                 <ShoppingCartIcon /><strong>Add to Cart</strong>
//             </StyledButton>
//             <StyledButton variant="contained" onClick={buyNow} style={{ background: "#fb541b" }}>
//                 <FlashOnIcon /><strong>Buy Now</strong>
//             </StyledButton>
//         </LeftContainer>
//     );
// };

// export default ActionItems;
