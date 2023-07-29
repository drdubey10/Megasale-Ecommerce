import { useEffect } from "react";
import React from "react";
import Banner from "./banner";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux'
import MidSlide from "./Midslide";
import MidSection from "./MldSection";
import Footer from "../Footer/Footer";
import Adder from "../adder/adder";
const BannerWrapper = styled(Box)`
  padding: 10px;
  background: "#F2F2F2";

`;

const HomeImageWrapper= styled(Grid)({

})

function Home() {
  const { products } = useSelector(state => state.getProducts);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])
  return (
    <Box style={{display: "flex", flexDirection : "column"}}>
      {/* <Navbar /> */}
      <BannerWrapper>
        <Banner />
        <MidSlide products={products} title="Mega Sale!" timer = {true}/>
        <MidSection/>
        <Adder/>
      </BannerWrapper>
      <Footer/>
    </Box>
  );
}

export default Home;
