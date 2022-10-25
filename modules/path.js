const path = require('path');

//Nome do arquivo atual
console.log(path.basename(__filename));

//NOme do ditório atual
console.log(path.dirname(__filename));

//Extensão do arquivo
console.log(path.extname(__filename));

//Criar objeto path
console.log(path.parse(__filename));

//JUntar caminhos'
console.log(path.join(__dirname, "teste", "teste.html"));