import React from "react";
import { Box, Typography } from "@mui/material"

function About() {
    return (
        <Box style={{ margin: "100px", width: '60%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <Box>
                <Typography style={{ fontSize: '27px' }}><strong>Introducing Megasale: Your Ultimate Ecommerce Experience</strong></Typography>
            </Box>
            <Box>
                <Typography>Welcome to Megasale, your one-stop destination for an unparalleled online shopping experience! I am <strong>Deepak Dubey</strong>, and I am proud to present my latest project, Megasale, an exceptional ecommerce website that combines cutting-edge technologies to provide you with a seamless, secure, and engaging shopping journey.</Typography>
            </Box>
            <hr ></hr>
            <Box>
                <Typography style={{ fontSize: '17px' }}><strong>Unmatched Technology Stack: MERN, Redux, Lottie, and React</strong></Typography>
            </Box>
            <hr></hr>
            <Box>
                <Typography>At Megasale, I have utilized the power of some of the most advanced technologies to craft an ecommerce platform that stands out from the rest.</Typography>
            </Box>
            <hr></hr>
            <Box>
                <ol>
                    <li><strong>MERN Stack:</strong> MERN stands for MongoDB, Express.js, React, and Node.js. This full-stack framework has allowed me to develop a robust, feature-rich website with real-time interactions, fast loading times, and a user-friendly interface. With MERN, I ensure a seamless flow from browsing products to placing orders, offering you an effortless shopping experience.</li>
                    <li><strong>Redux:</strong> To manage the application state efficiently, I have implemented Redux. This state management library allows me to maintain a single source of truth, making it easier to control data flow, implement features like cart management, and handle user interactions smoothly.</li>
                    <li><strong>Lottie for Animation:</strong> I believe that animations play a crucial role in enhancing user engagement and creating delightful experiences. With Lottie, I have added captivating animations across the website, from product showcases to interactive elements, making your journey through Megasale visually appealing and enjoyable.</li>
                    <li><strong>React:</strong> The entire frontend of Megasale is built using React, a powerful and flexible JavaScript library. React enables me to create reusable components, ensuring a consistent design, seamless navigation, and exceptional performance.</li>
                </ol>
            </Box>
            <hr></hr>
            <Box>
                <Typography style={{ fontSize: '17px' }}><strong>Seamless Shopping Experience</strong></Typography>
            </Box>
            <hr></hr>
            <Box>
                <ol>
                    <li><strong>User-Friendly Interface:</strong> My website's intuitive design ensures that you can effortlessly browse through a vast collection of products, filter them according to your preferences, and find exactly what you need in no time.</li>
                    <li><strong>Real-Time Interactivity:</strong> With real-time updates powered by MERN and Redux, you can expect dynamic changes in your shopping cart, order status, and product availability, keeping you informed at every step of the way.</li>
                    <li><strong>Secure Transactions:</strong> Your security is my utmost priority. Megasale employs top-notch encryption and security measures, guaranteeing that your payment information and personal details are safe and protected.</li>
                    <li><strong>Engaging Animations:</strong> Thanks to Lottie, my website is infused with lively animations, creating an immersive experience that will leave a lasting impression.</li>
                </ol>
            </Box>
            <hr></hr>
            <Box>
                <Typography style={{ fontSize: '27px', alignContent: 'right' }}><strong>- Thank you!</strong></Typography>
            </Box>
            <hr></hr>
            <Box>
                <Typography style={{ fontSize: '27px' }}><strong><a href="https://www.linkedin.com/in/deepakdubey0/">Connect with me on linkedin</a></strong></Typography>
            </Box>
        </Box>
    )
}

export default About;

