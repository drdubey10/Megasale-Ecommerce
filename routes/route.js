import express from 'express';
import { Accountsignup, userLogin }from '../controller/usercontrol.js';
import { getProducts } from '../controller/product-controller.js';
import { getProductById } from '../controller/product-controller.js';
import { addPaymentGateway,paytmResponse } from '../controller/paymentController.js';
const router = express.Router();

router.post('/signup',Accountsignup)
router.post('/login',userLogin);
router.get('/products',getProducts );
router.get('/product/:id', getProductById);
router.post('/payment',addPaymentGateway);
router.post('/callback',paytmResponse)

export default router;
