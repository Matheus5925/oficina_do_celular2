import { con } from "./connection.js"


export async function Login(email, senha) {
    const comando = `
    select  id_funcionario  as id,
        nm_funcionario as Nome,
        ds_email as Email
    from tb_funcionario 
        where ds_email = ? and 
        ds_senha = ?`

    const [linhas] =  await (await con).query(comando,[email, senha]);
    return linhas[0];
}