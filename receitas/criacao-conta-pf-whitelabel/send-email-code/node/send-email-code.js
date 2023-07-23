const axios = require('axios');

async function sendEmailCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/send-email-code';
    const emailAddress = 'josevaldo@peixoto.com.br';

    try {
        const response = await axios.post(baseUrl, { email: emailAddress });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

sendEmailCode();