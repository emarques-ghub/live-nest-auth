//JWT - Jason Web Tokens
// 3 partes: header, payload, chave secreta
//header hmac sha256 bits

//executar com 
// npm install base64-url --save  //biblioteca de base64-url padrao para converter caracteres nao padrao ex. ==
// node_modules/.bin/ts-node jwt.ts
const header = {
    alg: 'HS256',  //hmac sha256 bits
    typ: 'JWT'
};

//dados do token
const payload = {
    username: 'user1@user.com',
    name: 'Luiz Carlos',
    exp: new Date().getTime(), //timestamp
};

//padronizar
const base64Url = require('base64-url');

//assinatura
//const key = base64Url.encode('abcd123456');
const key = 'abcd123456';

//retorno da header + payload + chave em base64
//const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64');
//const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64');
const headerEncoded = base64Url.encode(Buffer.from(JSON.stringify(header)));
const payloadEncoded =base64Url.encode(Buffer.from(JSON.stringify(payload)));

console.log(headerEncoded, payloadEncoded);

//assinatura
const crypt = require('crypto');
const signature = crypt
    .createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('bin');

//console.log(signature);
console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`);

//verificar JWT em www.jwt.io

console.log('ksdj')