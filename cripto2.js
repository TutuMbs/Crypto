const crypto = require('crypto')
const alg = 'aes-256-ctr'
const pwd = 'Voyage'


const text = 'Mensagem a ser Criptografada'
const cipher = crypto.createCipher(alg, pwd)
const crypted = cipher.update(text, 'utf8', 'hex')
console.log('Criptografado: '+crypted)


const decipher = crypto.createDecipher(alg, pwd)
const plain = decipher.update(crypted, 'hex', 'utf8')
console.log('Descriptografado: '+plain)