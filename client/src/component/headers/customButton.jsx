import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/logindialog";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";


const MainHeaderButtonsWrapper = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '0 3% 0 1%',
    '& > *': {
        marginRight: '30px',
        fontSize: '12px',
        // marginLeft: '35px',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    [theme.breakpoints.down('md')]:{
        display : 'block' 
    }
}));


const MoreAndCart = styled(Box)(({theme})=>({
    display: "flex",
    [theme.breakpoints.down('md')]:{
        display : 'block',
        marginLeft: '0px'
    }

}));

const MenuItems2 = styled(Button)(({theme})=>({

    background : "white",color: "black", marginLeft: '20px', width: '130px',
    [theme.breakpoints.down('md')]:{
        marginLeft: '0px',
        marginTop: '40px'

    }

}));
const MenuItems3 = styled(Button)(({theme})=>({

    background : "white",color: "black", marginLeft: '0px', width: '130px',
    [theme.breakpoints.down('md')]:{
        marginLeft: '0px',
        marginTop: '40px'

    }

}));
const MenuItems1 = styled(Button)(({theme})=>({

    background : "white",color: "black", marginLeft: '30px', width: '130px',
    [theme.breakpoints.down('md')]:{
        marginLeft: '0px',
        marginTop: '40px'
    }

}));




function CustomButton() {

    const [loginClickStatus, changeLoginClickStatus] = React.useState(false);
    const { account ,setAccount} = useContext(DataContext);

    function clickedOnLogin() {
        changeLoginClickStatus(true);
    }

    return (
        <MainHeaderButtonsWrapper>
            {
                account ? <Profile account ={account} setAccount={setAccount}/> : <MenuItems1 variant="contained" onClick={clickedOnLogin}><strong>Login</strong></MenuItems1>
            }
           <Link to={'/about'} style={{textDecoration: 'None'}}><MenuItems2 variant="contained" ><strong>About</strong></MenuItems2></Link> 
            <MoreAndCart>
                
           <Link to={'/cart'} style={{textDecoration: 'None'}}><MenuItems3 variant="contained" ><ShoppingCartIcon></ShoppingCartIcon><strong>Cart</strong></MenuItems3></Link> 


            </MoreAndCart>
            <LoginDialog loginClickStatus={loginClickStatus} changeLoginClickStatus={changeLoginClickStatus} />
        </MainHeaderButtonsWrapper>
    );
}

export default CustomButton;
