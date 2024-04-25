import Express from "express";
import AutorController from "../controllers/AutorController.js";

const routes = Express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);


export default routes;