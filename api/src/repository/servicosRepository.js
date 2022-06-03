import { con } from "./connection.js";

export async function Servicos(servicos) {
    const comando = `insert into tb_servicos
    (nm_cliente, ds_email_cliente, ds_cpf, ds_marca_celular, ds_modelo_cel, dt_entrega, dt_devolucao, vl_preco, ds_problema_cel, ds_telefone)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ? );`

    const [resposta] = await (await con).query(comando,[servicos.nome, servicos.email, servicos.cpf, servicos.MarcaCelular, servicos.ModeloCelular, servicos.entrega, servicos.devolucao, servicos.preco, servicos.problema, servicos.telefone])
    servicos.id = resposta.insertId;
    return resposta;
}


export async function ListarTodosServicos() {
    const comando = `
    select id_servicos as servicos,
            nm_cliente as nome, 
            ds_cpf as cpf
        from tb_servicos`

    const [ linhas ] = await (await con).query(comando);
    return linhas;
}

