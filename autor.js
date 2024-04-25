import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    Nome: { type: String, required: true },
    Nacionalidade: { type: String }
},
    { versionKey: false }
);

const Autor = mongoose.model("Autores", autorSchema);

export {Autor, autorSchema};