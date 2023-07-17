const axios = require('axios');

async function sendPhoneCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/send-phone-code?phone=79900000000';

    try {
        const response = await axios.post(baseUrl);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

sendPhoneCode();