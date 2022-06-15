import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function cadastrarServicos(nome, email, telefone, cpf, MarcaCelular, ModeloCelular, entrega, 
    devolucao, preco, problema) {
    const resposta = await api.post('/servicos', {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        MarcaCelular: MarcaCelular,
        ModeloCelular: ModeloCelular,
        entrega: entrega,
        devolucao: devolucao,
        preco: preco,
        problema: problema
    })
    return resposta.data;
}