const axios = require('axios');

async function verifyEmailCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/verify-email-code?email=sotex95831@rc3s.com&codeVerification=9999';

    try {
        const response = await axios.post(baseUrl);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

verifyEmailCode();