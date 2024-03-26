
// const https = require('https');
// const PaytmChecksum = require('./PaytmChecksum');

// var paytmParams = {};

// paytmParams.body = {
//     "requestType"   : "Payment",
//     "mid"           : "test5P07128923987041", // Replace with your MID
//     "websiteName"   : "WEBSTAGING", // For testing, use WEBSTAGING
//     "orderId"       : "ORDERID_93765", // Replace with your order ID
//     "callbackUrl"   : "https://your_callback_url_here"
// };
// PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "nXuJnxiYoHRe&&2J").then(function(checksum){

//     paytmParams.head = {
//         "signature"   : checksum
//     };

//     var post_data = JSON.stringify(paytmParams);

//     var options = {
//         hostname: 'securegw-stage.paytm.in', // For testing, use securegw-stage.paytm.in
//         port: 443,
//         path: '/theia/api/v1/initiateTransaction?mid=' + paytmParams.body.mid + '&orderId=' + paytmParams.body.orderId,
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': post_data.length
//         }
//     };

//     var response = "";
//     var post_req = https.request(options, function(post_res) {
//         post_res.on('data', function (chunk) {
//             response += chunk;
//         });

//         post_res.on('end', function(){
//             console.log('Response: ', response);
//         });
//     });

//     post_req.write(post_data);
//     post_req.end();
// });

// var paytmParams = {};

// paytmParams.body = {
//     "mid"           : "test5P07128923987041",
//     "orderId"       : "OREDRID91212",
//     "amount"        : "1200.00",
//     "posId"         : "S12_123"
// };
// PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "nXuJnxiYoHRe&&2J").then(function(checksum){

//     paytmParams.head = {
//         "version"	: "v1",
//         "signature"	: checksum
//     };
//     var post_data = JSON.stringify(paytmParams);
//     console.log(post_data);

//     var options = {
//         hostname: 'securegw-stage.paytm.in',
//         port: 443,
//         path: '/paymentservices/qr/create',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': post_data.length
//         }
//     };
//     var response = "";
//     var post_req = https.request(options, function(post_res) {
//         post_res.on('data', function (chunk) {
//             response += chunk;
//         });
//         post_res.on('end', function(){
//             console.log('Response: ', response);
//         });
//     });
//     post_req.write(post_data);
//     post_req.end();
// });

