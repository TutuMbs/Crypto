const crypto = require('crypto')
//algoritmo usado para gerar a informação
const alg = 'aes-256-ctr'
//senha para criptografar a string
const pwd = 'Voyage'


const text = 'Mensagem a ser Criptografada'
//pega o algoritmo e a senha e criptografa
const cipher = crypto.createCipher(alg, pwd)
const crypted = cipher.update(text, 'utf8', 'hex')
console.log('Criptografado: '+crypted)

//Descriptografando (fazendo o contrário)
const decipher = crypto.createDecipher(alg, pwd)
const plain = decipher.update(crypted, 'hex', 'utf8')
console.log('Descriptografado: '+plain)
