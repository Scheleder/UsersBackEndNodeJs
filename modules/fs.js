const path = require('path');
const fs = require('fs');

//Criar uma pasta
    // fs.mkdir(path.join(__dirname, "/teste"), (error)=>{
    //     if(error){
    //         return console.log("ERRO NA CRIAÇÃO! -> ", error)
    //     }
    //     console.log("Pasta criada com sucesso!");
    // });

//Criar arquivo
// fs.writeFile(
//     path.join(__dirname, "/teste", "teste.txt"), 
// "Hello",
// (error) =>{
//     if(error){
//         return console.log("ERRO: ", error);
//     }
//     console.log("Arquivo criado com sucesso!");
// }
//);

// Gravar arquivo
// fs.appendFile(
//     path.join(__dirname, "/teste", "teste.txt"),
//     " World",
//     (error)=>{
//         if(error){
//             return console.log("ERRO: ", error);
//         }
//         console.log("Arquivo atualizado com sucesso!")
//     }
// );

fs.readFile(path.join(__dirname, "/teste", "teste.txt"), "utf8", (error, data)=>{
    if(error){
        return console.log("ERRO: ", error);
    }
    console.log(data);
});
    