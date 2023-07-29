import React from "react";
import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const PremiumSearchInput = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  width: "46.5%",
  marginLeft: "2%",
  borderRadius: theme.spacing(1), 
  display: "flex",
}));

const PremiumSearchInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  paddingLeft: theme.spacing(1), 
  fontSize: "unset",
}));

const SearchIconWrapper = styled(Box)({
  color: "black",
  padding: "5px",
});
const ListWrapper = styled(List)({
  position: 'absolute',
  background: 'white',
  color: 'black',
  marginTop: '30px'
})

function SearchBox() {

  const [text, setText] = React.useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const getText = (text) => {
    setText(text);
  }
  return (
    <PremiumSearchInput>
      <PremiumSearchInputBase
        placeholder="Search for products, brands and more"
        onChange={(event) => getText(event.target.value)}
        value ={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link  to= {`/product/${product.id}`}
                onClick={()=>setText('')}
                style ={{
                textDecoration: 'none',
                color : 'black'}}>

                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </PremiumSearchInput>
  );
}

export default SearchBox;
