
import React from 'react';
import { Box ,styled } from '@mui/material';
import { NavData } from "../../constant/data";
import Card from "./Card"



const NavWrapper = styled(Box)(({theme})=>({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'space-between',
  margin:'55px 130px 0 130px',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]:{
    margin: '0px'
  }

}));

const Container = styled(Box)({

  textAlign: 'center',
  padding:'12px 8px'
})

function Navbar() {
  return (
    <NavWrapper >
      {NavData.map((item, index) => (

        <Container>
        <Card key={index} linkforimage={item.url} title={item.text} />
        </Container>
      ))}
    </NavWrapper>
  );
}


export default Navbar;
