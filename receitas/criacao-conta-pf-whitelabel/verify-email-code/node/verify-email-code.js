const axios = require('axios');

async function verifyEmailCode() {
    const baseUrl = 'https://whitelabel-sandbox.delbank.dev.br/v1/customers/verify-email-code';

    const data = {
        email: 'sotex95831@rc3s.com',
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

verifyEmailCode();