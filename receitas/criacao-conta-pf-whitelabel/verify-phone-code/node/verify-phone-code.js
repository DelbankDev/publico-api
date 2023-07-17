const axios = require('axios');

async function verifyPhoneCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/verify-phone-code?phone=79900000000&codeVerification=9999';

    try {
        const response = await axios.post(baseUrl);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

verifyPhoneCode();