import { Router } from "express";
import { Servicos, ListarTodosServicos } from "../repository/servicosRepository.js";

const server = Router();

server.post('/servicos', (req, resp) =>{
    const servicos = req.body;
    const result = Servicos(servicos)
    if (!servicos.nome) 
        throw new Error("Nome obrigátorio")
    if (!servicos.email) 
        throw new Error("Email obrigátorio")
    if (!servicos.cpf) 
        throw new Error("cpf obrigátorio")
    if (!servicos.MarcaCelular) 
        throw new Error("Marca do Dispositivo obrigátorio")
    if (!servicos.ModeloCelular) 
        throw new Error("Modelo do Dispositivo obrigátorio")
    if (!servicos.preco) 
        throw new Error("Preço obrigátorio")
    if (!servicos.problema) 
        throw new Error("Os defeitos do aparelho são obrigátorio")
        if (!servicos.telefone) 
        throw new Error("Telefone para contato obrigátorio")
    resp.send(result)
    try {
        
    } catch (err) {
        resp.status(400).send({
            e: "Ocorreu um erro",
            erro: err.message
        })
    }
})


server.get('/servicos',  async (req, resp) =>{
   
    try {
        const result = await ListarTodosServicos();
        resp.send(result)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;