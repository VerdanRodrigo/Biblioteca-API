import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
    app.route("/").get((_req, res) => res.status(200).send("BibliotecaAPI!"));

    app.use(express.json(), livros, autores);
};

export default routes;