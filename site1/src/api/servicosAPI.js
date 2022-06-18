import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function cadastrarServicos(nome, email, cpf, MarcaCelular, ModeloCelular, entrega, 
    devolucao, preco, problema, telefone) {
    const resposta = await api.post('/servicos', {
        nome: nome,
        email: email,
        cpf: cpf,
        MarcaCelular: MarcaCelular,
        ModeloCelular: ModeloCelular,
        entrega: entrega,
        devolucao: devolucao,
        preco: preco,
        problema: problema,
        telefone: telefone,
    })
    return resposta.data;
}

export async function alterarServicos(nome, email, cpf, MarcaCelular, ModeloCelular, entrega, 
    devolucao, preco, problema, telefone, id) {
    const resposta = await api.put(`/servicos/${id}`, {
        nome: nome,
        email: email,
        cpf: cpf,
        MarcaCelular: MarcaCelular,
        ModeloCelular: ModeloCelular,
        entrega: entrega,
        devolucao: devolucao,
        preco: preco,
        problema: problema,
        telefone: telefone,
    })
    return resposta.data;
}
