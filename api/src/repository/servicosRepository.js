import { con } from "./connection.js";

export async function Servicos(servicos) {
    const comando = `insert into tb_servicos
    (nm_cliente, ds_email_cliente, ds_cpf, ds_marca_celular, ds_modelo_cel, dt_entrega, dt_devolucao, vl_preco, ds_problema_cel, ds_telefone)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ? );`

    const [resposta] = await (await con).query(comando,[servicos.nome, servicos.email, servicos.cpf, servicos.MarcaCelular, servicos.ModeloCelular, servicos.entrega, servicos.devolucao, servicos.preco, servicos.problema, servicos.telefone])
    servicos.id = resposta.insertId;
    return servicos;
}


export async function ListarTodosServicos() {
    const comando = `
    select id_servicos as id,
            nm_cliente as nome, 
            ds_cpf as cpf
        from tb_servicos`

    const [ linhas ] = await (await con).query(comando);
    return linhas;
}


export async function BuscarPorNome(nome) {
    const comando = 
            `select id_servicos as id,
                    nm_cliente as nome, 
                    ds_cpf as cpf
                from tb_servicos
            WHERE nm_cliente like ?`

    const [ linhas ] = await (await con).query(comando,[`%${nome}%`]);
    return linhas;
}


export async function BuscarPorCPF(cpf) {
    const comando = 
            `select id_servicos as id,
                    nm_cliente as nome, 
                    ds_cpf as cpf
                from tb_servicos
            WHERE ds_cpf like ?`

    const [ linhas ] = await (await con).query(comando,[`%${cpf}%`]);
    return linhas;
}


export async function DeletarServico(id) {
    const comando = `DELETE from tb_servicos where id_servicos = ?`
    const [ resposta ] = await (await con).query(comando, [ id ]);
    resposta.affectedRows;
    return resposta;
}


export async function AlterarServicos(id, servicos) {
    const comando = 
            `UPDATE tb_servicos set nm_cliente = ?,
                ds_email_cliente = ?, ds_cpf = ?,
                ds_marca_celular = ?, ds_modelo_cel = ?,
                dt_entrega = ?, dt_devolucao = ?,
                vl_preco = ?, ds_problema_cel= ?, ds_telefone = ? 
            where id_servicos = ?`;

    const [ resposta ] = await (await con).query(comando, [servicos.nome, servicos.email, servicos.cpf, servicos.MarcaCelular, servicos.ModeloCelular, servicos.entrega, servicos.devolucao, servicos.preco, servicos.problema, servicos.telefone, id]);
    return resposta.affectedRows;
}
