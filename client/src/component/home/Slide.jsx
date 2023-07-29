import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Box, Typography, Button, Divider, styled } from '@mui/material';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,


    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,


    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,


    }
};

const Component = styled(Box)({
    marginTop: '10px',
    background: 'white'
})

const Deal = styled(Box)({
    padding: '15px 20px',
    display: 'flex',
    background: "white"
})
const Timer = styled(Box)({
    display: 'flex',
    marginLeft: '10px',
    alignItems: 'center',
    color: 'red'
})

const ViewAlButton = styled(Button)({
    marginLeft: '850px',
    borderRadius: '2px',
    fontSize: '12px',
    background: 'red'
})
const Image = styled('img')({
    width: 'auto',
    height: '150px'
})
const Text = styled(Typography)({
    fontSize: '14px',
    marginTop: '5px'
})
const renderer = ({ hours, minutes, seconds }) => {
    return <Box varient="span">{hours}:{minutes}:{seconds} Left </Box>

}

const Slide = ({ products, title, timer }) => {


    return (
        <Component>
            <Deal>
                <Typography style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '25px', lineHeight: '32px' }}> {title} </Typography>

                {
                    timer &&
                    <Timer>
                        <AccessAlarmsIcon sx={{ color: red[500] }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>

                }

                {/* <Link to='/allproducts'> <ViewAlButton variant="contained" ><strong>View All</strong></ViewAlButton>  </Link> */}
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                centerMode={true}
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
            >
                {
                    products.map(product => (

                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box textAlign="center" style={{ padding: '25px 15px' }}>
                                <Image src={product.url} alt="product" />
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green', }}>{product.discount}</Text>
                                <Text style={{ color: 'silver', opacity: '.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>

        </Component>

    )
}
export default Slide;