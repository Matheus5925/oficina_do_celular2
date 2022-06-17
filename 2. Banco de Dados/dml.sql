use Oficina_do_celular;

-- CSU(0) Carga inicial
insert into tb_funcionario
(nm_funcionario, ds_email, dt_nascn, ds_cpf, ds_senha)
     values("Mariana Ferreira", "mari@gmail.com", "2006-05-12", "54652045884", "mariana15");
     
-- CSU(1) Efetuar Login
select  id_funcionario  as id,
		nm_funcionario as Nome,
		ds_email as Email
	from tb_funcionario 
    where ds_email = "mari@gmail.com" and 
		ds_senha = "mariana15";
        

-- CSU(2) Cadastrar servico
insert into tb_servicos
(id_servicos  ,nm_cliente, ds_email_cliente, ds_cpf, ds_marca_celular, ds_modelo_cel, dt_entrega, dt_devolucao, vl_preco, ds_problema_cel, ds_telefone)
		values("Otavio de Jesus","tatavio@gmail.com", "12345874814", "Xiaomi", "Redmi note10S", "2022-05-01", "2022-05-05", 85.20,"Botões laterais com defeito", "119881818186" );
        

-- CSU(3) Consultar Servicos
select id_servicos as id,
        nm_cliente as nome, 
        ds_cpf as cpf
    from tb_servicos;


-- CSU(4) Consultar Servicos por Nome
    select id_servicos as id,
        nm_cliente as nome, 
        ds_cpf as cpf
    from tb_servicos
    WHERE nm_cliente like '%a%';

-- CSU(4.1) Consultar Servicos por CPF
	select id_servicos as id,
        nm_cliente as nome, 
        ds_cpf as cpf
    from tb_servicos
    WHERE ds_cpf like '%3%';
    
    
-- CSU(5) Editar servico
	UPDATE tb_servicos set nm_cliente = "Gabrielle Ueda",
			ds_email_cliente = "gabiueda@gmail.com", ds_cpf = "54623012525",
            ds_marca_celular = "Sansung", ds_modelo_cel = "A10",
            dt_entrega = "2022-03-05", dt_devolucao = "2022-03-12",
            vl_preco = 150.5, ds_problema_cel= "Tela e placa", ds_telefone = "11985858557" where id_servicos = 1;    
    
        

-- CSU(6) Deletar servico
DELETE from tb_servicos where id_servios = 1;

