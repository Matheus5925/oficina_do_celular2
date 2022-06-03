import { Router } from "express";
import { Login } from "../repository/funcionarioRepository.js";

const server = Router();

server.post('/funcionario/login',  async (req,resp) =>{
    
    try {
        const {email, senha} = req.body;
        const resultado = await Login(email, senha)
        if (!resultado) {
            throw new Error('Credenciais Inválidas')
        }
        resp.send(resultado)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })        
    }

})

export default server;