const crypto=require('crypto')
const hash=crypto.createHash('sha256')
hash.update('subahsh285')
console.log(hash.digest('hex'))