
import Express from "express";
import conectaNaDataBase from "./config/dbconect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao!", erro);
});

conexao.once("open", () => {
    console.log("conexao feita com sucesso!")
})

const app = Express();

routes(app);


export default app

