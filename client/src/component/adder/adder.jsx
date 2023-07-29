import React from "react"
import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom";

function Adder(){
return(
    <Box style={{background:"white", height: "200px", textAlign: "center"}} >
           <Link to={'/allproducts'} style={{textDecoration: 'None'}}><Button variant="contained" style={{ background : "#FF2D00",color: "black", marginLeft: '20px', width: '130px',height: '50px',marginTop:"100px"}} ><strong>View Store</strong></Button></Link> 

    </Box>

)
}
export default Adder;