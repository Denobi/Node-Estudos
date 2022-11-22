const path = require('path');

// BASE NAME
//  APENAS O NOME DO ARQUIVO

console.log(path.basename(__filename));
//Nome do diretorio atual
console.log(path.dirname(__filename));
//EXTENSAO DO ARQUIVO
console.log(path.extname(__filename));
//CRIA OBJETO PATH
console.log(path.parse(__filename));
//JUNTAR CAMINHOS DE ARQUIVOS
console.log(path.join(__dirname, 'Teste', 'text.html'));
