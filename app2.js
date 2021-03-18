const crypto = require('crypto');
const secret = 'Sara Nelly';
let hash = crypto.createHmac('sha256', secret)
  .update("If you love node so much why you did marry with ur wife?")
  .digest("hex");
console.log(hash);


