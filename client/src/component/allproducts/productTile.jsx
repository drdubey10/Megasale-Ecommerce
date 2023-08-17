import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";


const TileWraper = styled(Box)({
        background: 'white',
        border: "1px solid silver",
        height: '280px',
        width: '280px',
        margin: "50px 20px 50px 50px",
        borderRadius: "30px",
        boxShadow: "5px 10px 18px #888888",
        padding : "10px",

})
const TittleWrapper = styled(Typography)({
    fontWeight: "bold",
    marginTop : "5px",
})


function ProductTile({ products }) {
  const [open, setopen] = React.useState(false);

    function hovOn() {
        setopen(true);
      }
      function hovOff(){
        setopen(false)
      }
    return (
        <Link to={`/product/${products.id}`} style={{ textDecoration: 'none' }}>

            <TileWraper onMouseEnter={hovOn} onMouseLeave ={hovOff}>
                <Box>
                    <img style={{ height: '150px', width: '150px', borderRadius: '10px', padding: "15px", transform: open ? 'scale(1.2,1.2)' : 'none', paddingTop: open? '40px': '15px'}} src={products.url} alt="productimage"></img>
                </Box>
                <Box>
                    <TittleWrapper style={{display: open ? 'none' : ''}}>{products.title.shortTitle}</TittleWrapper>
                    <Typography style={{display: open ? 'none' : ''}}><strong>₹{products.price.cost}</strong> <strike style={{color: 'gray', opacity : "0.6"}}> ₹{products.price.mrp}</strike></Typography>
                    <Typography style={{color: "green",display: open ? 'none' : ''}}>Get {products.price.discount} on this Deal</Typography>
                </Box>
            </TileWraper>
        </Link>
    )
}
export default ProductTile;

