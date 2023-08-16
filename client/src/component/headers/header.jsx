import React from "react";
import CustomButton from "./customButton";
import SearchBox from "./searchbox";
import { AppBar, Toolbar, IconButton,Drawer, Box,List,ListItem, styled } from "@mui/material";

import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const PremiumHeader = styled(AppBar)({
    backgroundColor: "#dddddd",
    height: "60px",
});
const HeaderLogo = styled(Box)({
    marginLeft: '10%'
});
const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuChanged = styled(IconButton)(({theme})=>({
    display : 'none',
    [theme.breakpoints.down('md')]:{
        display : 'block',
        color: 'white'
    }
}));
function Header() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }

    const list = () =>(
        <Box onClick= {handleClose}style ={{width: '200px'}}  >
            <List>
                <ListItem button>
                <CustomButton/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <PremiumHeader>
            <Toolbar style={{ minHeight: '55' }}>
                <MenuChanged onClick={handleOpen}>
                    <MenuIcon/>
                </MenuChanged>
                <Drawer open = {open} onClose = {handleClose}>
                <Box>
                {list()}
                </Box>
                </Drawer>
                <Link to={`/`} style={{ textDecoration: "none" }}>
                    <HeaderLogo>
                        <img src="/mega.png" alt="logohere" style={{ width: 120 }}></img>
                    </HeaderLogo>

                </Link>

                <SearchBox />
                <Wrapper>
                    <CustomButton />

                </Wrapper>
            </Toolbar>
        </PremiumHeader>
    );
}

export default Header;
