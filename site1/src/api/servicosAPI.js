import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function CadastarServicos(servicos) {
    const resposta = await api.post('/servicos', {
        nome: "a",
        email: " will@gmail.com",
        cpf: "48525648115 ",
        MarcaCelular: " Motorola",
        ModeloCelular: " G9 Power",
        entrega: "2022-04-05",
        devolucao: "2022-04-12",
        preco: 90.5,
        problema: "Celular não liga ",
        telefone: " 11985451815"
    })
    return resposta.data;
}