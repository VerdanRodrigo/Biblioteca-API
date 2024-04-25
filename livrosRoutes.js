import Express from "express";
import LivroController from "../controllers/livroController.js";

const routes = Express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.buscaLivroPorAutor);
routes.get("/livros/:id", LivroController.listarLivroId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes;