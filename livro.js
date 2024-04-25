import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Autores'},
}, { versionKey: false });


const Livro = mongoose.model("Livros", livroSchema);

export default Livro;