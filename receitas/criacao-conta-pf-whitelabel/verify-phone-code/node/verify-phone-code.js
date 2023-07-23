const axios = require('axios');

async function verifyPhoneCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/verify-phone-code';

    const data = {
        phone: '79900000000',
        codeVerification: '9999'
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(baseUrl, data, config);

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

verifyPhoneCode();