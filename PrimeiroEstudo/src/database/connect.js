const mongoose = require("mongoose");
const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://admin:root@cursonodejs.shlslwh.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      return console.log("Conectado ao Banco de dados com Sucesso! ");
    }
  );
};

module.exports = connectToDatabase