create database Oficina_do_celular;
 
use Oficina_do_celular;

create table tb_funcionario(
	id_funcionario int primary key auto_increment,
    nm_funcionario varchar(200) not null,
    ds_email       varchar(100),
    dt_nascn       datetime,
    ds_cpf         varchar(14),
    ds_senha       varchar(50) not null
);

create table tb_servicos(
	id_servicos int primary key auto_increment,
    nm_cliente           varchar(200) not null,
    ds_email_cliente     varchar(100),
    ds_cpf               varchar(14) not null,
    ds_marca_celular     varchar(20) not null,
    ds_modelo_cel       varchar(100) not null,
	dt_entrega      	datetime,
	dt_devolucao    	datetime,
	vl_preco            decimal(15,2) not null,
	ds_problema_cel 	varchar(200),
	ds_telefone          varchar(100)
);

show tables;

drop table tb_cadastro_servicos;