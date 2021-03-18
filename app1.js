const os = require('os');
const fs = require('fs');
let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();
fs.appendFile('archivofs1.txt','archivo de prueba',function(rror){
  console.log('error al crear el archivo');
})
//console.log(cpu);
//console.log(sistema);
//console.log(usuario);
