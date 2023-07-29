import express from 'express';
import Connection from "./database/db.js";
// import defaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';
 
const __dirname = path.resolve();

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Router);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function(_,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
    res.status(500).send(err)
  })
})

const PORT = process.env.PORT || 8000;

Connection();
app.listen(8000, () =>
  console.log('Example app listening on port 8000!'),
);
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = '/callback';
paytmParams['EMAIL'] = 'megasaledemomail@gmail.com';
paytmParams['MOBILE_NO'] = '123456';
