import React from "react"
import { Box, styled } from "@mui/material"
import Slide from "./Slide"

const Component = styled(Box)({
    display: 'flex'
});

const LeftComp = styled(Box)(({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width : '100%'
    }
}));

const RightComp = styled(Box)(({theme})=>({
    background: '#FF2D00',
    padding: '5px',
    marginTop: '10px',
    marginLeft: '10px',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
        display:'none',

    }
}));
const MidSlide = ({ products, title, timer }) => {
    // const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    // const adURL = 'https://i.pinimg.com/750x/43/98/9b/43989b83eeb568ad29e9c75e82067e42.jpg';
    const adURL ='https://i.pinimg.com/originals/a7/87/57/a787574b91c6df421352e0c170ec5312.png';
    return (
        <Component>
            <LeftComp>
                <Slide
                    products={products}
                    title={title}
                    timer={timer}
                ></Slide>
            </LeftComp>

            <RightComp>
                <img src={adURL} alt ="" style={{ width: '217px', height: "330px" }}></img>

            </RightComp>

        </Component>
    )
}
export default MidSlide;