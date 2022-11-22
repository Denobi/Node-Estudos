
const fs = require('fs');
const path = require('path');

//CRIAR UMA PASTA
// fs.mkdir(path.join(__dirname, '/test'),(error) =>{
//   if(error){
//     return console.log('Erro', error)
//   }
//   console.log('Pasta Criada com Sucesso')
// })

//CRIAR UM ARQUIVO NA PASTA
fs.writeFile(path.join(__dirname, '/test','test.txt'),'hello Node!',(error)=>{
  if(error){
        return console.log('Erro:', error)
    }

  console.log('Arquivo Criada com Sucesso')

})

// ADICIONAR INFORMAÇÂO NO ARQUIVO

fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello World',(error)=>{
  if(error){
        return console.log('Erro:', error)
    }

  console.log('Arquivo Alterado com Sucesso')

})
fs.readFile(path.join(__dirname, '/test', 'test.txt'),'utf8 ',(error)=>{
  if(error){
        return console.log('Erro:', error)
    }

  console.log('Arquivo Alterado com Sucesso')

})
