const axios = require('axios');

const data = {
    document: '012.874.010-82',
    name: 'Josevaldo Peixoto',
    email: {
        value: 'teste3@josevaldopeixoto.dev.br',
        codeVerification: '9999'
    },
    phone: {
        ddd: '79',
        number: '90000000',
        codeVerification: '9999'
    },
    fatherName: 'string',
    motherName: 'string',
    monthlyInvoicing: 0,
    birthDate: '2023-06-21T19:40:08.300Z',
    educationLevel: 'UNDEFINED',
    maritalStatus: 'UNDEFINED',
    gender: 'UNINFORMED',
    address: {
        publicPlace: 'string',
        number: 'string',
        zipCode: '49052260',
        neighborhood: 'string',
        complement: 'string',
        isConfirmed: true,
        type: 'COMMERCIAL',
        cityId: 1,
        cityName: 'Aracaju'
    },
    password: 'string',
    securityPassword: 'secr',
    tokenNotification: 'string'
};

const headers = {
    'Content-Type': 'application/json-patch+json',
    'x-delbank-partner-key': 'c4ca4238a0b923820dcc509a6f75849b'
};

axios.post('https://whitelabel-sandbox.delbank.dev.br/v1/customers', data, { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });