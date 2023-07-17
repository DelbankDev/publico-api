const axios = require('axios');

async function sendPhoneCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/send-email-code?email=sotex95831@rc3s.com';

    try {
        const response = await axios.post(baseUrl);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

sendPhoneCode();