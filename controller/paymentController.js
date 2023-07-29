import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../index.js';
import formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (request, response) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};

export const paytmResponse = (request, response) => {
    const form = formidable({ multiples: true });

    form.parse(request, async (err, fields) => {
        if (err) {
            response.status(500).json({ error: 'Error parsing form data.' });
            return;
        }

        let paytmCheckSum = fields.CHECKSUMHASH;
        delete fields.CHECKSUMHASH;

        let isVerifySignature = paytmchecksum.verifySignature(fields, paytmMerchantKey, paytmCheckSum);

        if (isVerifySignature) {
            let paytmParams = {};
            paytmParams['MID'] = fields.MID;
            paytmParams['ORDERID'] = fields.ORDERID;

            try {
                let checksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
                paytmParams['CHECKSUMHASH'] = checksum;

                let post_data = JSON.stringify(paytmParams);

                let options = {
                    hostname: 'securegw-stage.paytm.in',
                    port: 443,
                    path: '/order/status',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length,
                    },
                };

                let res = '';
                let post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        res += chunk;
                    });

                    post_res.on('end', function () {
                        let result = JSON.parse(res);
                        response.redirect('');
                    });
                });

                post_req.on('error', function (e) {
                    console.log('Error in API call:', e.message);
                    response.status(500).json({ error: 'Error in API call.' });
                });

                post_req.write(post_data);
                post_req.end();
            } catch (error) {
                console.log('Error generating checksum:', error.message);
                response.status(500).json({ error: 'Error generating checksum.' });
            }
        } else {
            console.log('Checksum Mismatched');
            response.status(400).json({ error: 'Checksum Mismatched.' });
        }
    });
};
