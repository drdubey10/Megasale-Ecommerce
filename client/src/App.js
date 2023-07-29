import React from 'react';
import Header from './component/headers/header';
import { Box } from '@mui/material';
import Home from './component/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes , Route} from "react-router-dom";
import DetailView from './component/details/Detailview';
import Cart from './component/cart/Cart';
import About from './component/About/about'
import AllProduct from './component/allproducts/allproduct';
// import Footer from './component/Footer/Footer';
function App() {
  return (
    <DataProvider >
      <BrowserRouter>
      <Header/>
        <Box style={{ marginTop: "57px" }}>
          <Routes>
           <Route path = '/' element = {<Home/>}  />
           <Route path = '/product/:id' element = {<DetailView/>}  />
           <Route path = '/cart' element = {<Cart/>} />
           <Route path = '/about' element = {<About/>} />
           <Route path = '/allproducts' element ={<AllProduct/>}/>
          </Routes>
        </Box>
        <></>

      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
