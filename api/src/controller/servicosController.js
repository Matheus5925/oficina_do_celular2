import { Router } from "express";
import { Servicos, ListarTodosServicos, BuscarPorNome, BuscarPorCPF, DeletarServico, AlterarServicos, BuscarporId } from "../repository/servicosRepository.js";

const server = Router();

// Endpoint de cadastro de serviço para cliente

server.post('/servicos', async (req, resp) =>{
    try {
            const servicos = req.body;

            if (!servicos.nome) 
                throw new Error ("Nome obrigátorio")
            if (!servicos.email) 
                throw new Error("Email obrigátorio")
            if (!servicos.cpf) 
                throw new Error("cpf obrigátorio")
            if (!servicos.MarcaCelular) 
                throw new Error("Marca do Dispositivo obrigátorio")
            if (!servicos.ModeloCelular) 
                throw new Error("Modelo do Dispositivo obrigátorio")
            if (!servicos.preco)
                throw new Error("Preço obrigátorio");
            if (Number(servicos.preco) <= -1)
                throw new Error('Só pode números positivos!!')
            if (!servicos.problema) 
                throw new Error("Os defeitos do aparelho são obrigátorio");
            if (!servicos.telefone) 
                throw new Error("Telefone para contato obrigátorio")

            const result = await Servicos(servicos)
            resp.send(result)
        
        
    } catch (err) {
        resp.status(400).send({
           erro: err.message
        })
    }
})

// Endpoint para listar os serviços por id nome e cpf na busca geral


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

// Busca por nome no input da tela de busca

server.get('/servicos/nome', async (req, resp) =>{
    try {
        const { nome } = req.query;
        const resposta = await BuscarPorNome(nome);
        
        if (!resposta)
            throw new Error('Cliente não encontrado!')

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// Busca por CPF na tela de busca

server.get('/servicos/CPF', async (req, resp) =>{
    try {
        const { cpf } = req.query;
        const resposta = await BuscarPorCPF(cpf);
        if (!resposta)
            throw new Error('Cliente não encontrado!')

        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


// Endpoint para deletar algum serviço para cliente

server.delete('/servico/:id', async (req, resp) =>{
    
    
    try {
        const { id } = req.params;
        const resposta = await DeletarServico(id);
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// Endpoint de alteração de serviço

server.put('/servicos/:id', async (req, resp) =>{
   
    try {
        const { id } = req.params;
        const servicos = req.body;
        

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
            throw new Error(`Preço obrigátorio` )
        if (Number(servicos.preco) <= -1)
            throw new Error('Só pode números positivos!!')
        if (!servicos.problema) 
            throw new Error("Os defeitos do aparelho são obrigátorio")
        if (!servicos.telefone) 
            throw new Error("Telefone para contato obrigátorio")

            const resposta = await AlterarServicos(id, servicos);
            if (resposta != 1) {
                throw new Error('Filme não pode ser alterado!!');
            }

        else{
            resp.status(204).send();
            }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/servicos/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const resultado = await BuscarporId(id);

        resp.send(resultado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;