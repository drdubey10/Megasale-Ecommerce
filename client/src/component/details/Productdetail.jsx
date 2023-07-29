import React from "react";
import { Typography, Box } from "@mui/material";

const ProductDetail = ({ product }) => {
    return (
        <>
            <Typography style={{ fontSize: '22px' }}><strong>{product.title.longTitle}</strong></Typography>
            <Typography style={{ marginTop: '5', color: '#878787 ' }}>5 Ratings & 2 Reviews</Typography>
            <Typography>
                <Box component="span" style={{ fontSize: '28px' }}><strong>₹{product.price.cost}</strong></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <hr></hr>
            <br></br>

            <Typography ><strong>Available Offers</strong></Typography>
            <Box>
                <ul>
                    <li><strong>₹500 Off:</strong> Bikes & Scooters (Min. ₹30,000 purchase)</li>
                    <li><strong>Bank Offer:</strong> 5% Cashback on Flipkart Axis Bank Card</li>
                    <li><strong>No Cost EMI:</strong> Bajaj Finserv EMI Card (Min. cart value ₹2,997)</li>
                    <li><strong>Special Price:</strong> Extra 6% Off (incl. cashback/coupon)</li>
                    <li><strong>Travel-Friendly Electric Kettle:</strong> Pigeon brand - Instant Noodles, Coffee, Green Tea!</li>
                </ul>
                <Typography style={{ fontSize: '20px' }}><strong>Product Description</strong></Typography>
                <hr></hr>
                <Typography style={{ color: '#878787' }}>{product.description}</Typography>
            </Box>
        </>
    )
}
export default ProductDetail;