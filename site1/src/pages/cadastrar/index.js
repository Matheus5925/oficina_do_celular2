import './index.scss';
import '../../common/common.scss'
import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';
import {  useState} from 'react'
import { Link } from 'react-router-dom';


import PortaSaida from '../../assets/image/Foto-saida.png';
import { cadastrarServicos } from '../../api/servicosAPI';

export default function Cadastrar(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [MarcaCelular, setMarcaCelular] = useState('');
    const [ModeloCelular, setModeloCelular] = useState('');
    const [entrega, setEntrega] = useState('');
    const [devolucao, setDevolucao] = useState('');
    const [preco, setPreco] = useState(0);
    const [problema, setProblema] = useState('');
    const [erro, setErro] = useState('')

    async function ClickCadastrar() {
          try {
                const r = await cadastrarServicos(nome, email, telefone, cpf, MarcaCelular, ModeloCelular, entrega, 
                    devolucao, preco, problema);
          } catch (err) {
              if (err.response.status === 401) {
                    setErro(err.response.data.erro)
              }
          }
    }

    return(
        <div className="Pagina-cadastrar">
            <Cabecalho></Cabecalho>
            <main>
               <DashbordLateral></DashbordLateral>
                <section class="form-parte2">
                    <div class="saida-landing">
                        <Link to='/menu'><img class="img-saida" src={PortaSaida} alt=""/></Link>
                    </div>
                    <form class="formulario-de-cadastro" action="" method="post">

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Nome:</strong></label>
                                <input type="text" name="nome" id="nome_cliente" value={nome} onChange={e => setNome(e.target.value)}/>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>E-mail:</strong></label>
                                    <input type="email" name="e-mail" id="email_cliente" value={email} onChange={e => setEmail(e.target.value)}/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>


                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Telefone de contato:</strong></label>
                                <input type="tel" name="tel-contato" id="tel-cliente" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                                <hr  width="320" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>CPF:</strong></label>
                                    <input type="text" name="cpf" 
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                    title="Digite um CPF no formato: xxx.xxx.xxx-xx" maxlength="14" value={cpf} onChange={e => setCpf(e.target.value)}/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Marca do celular:</strong></label>
                                <input type="text" name="marca-do-celular" id="marca_celular_cliente" value={MarcaCelular} onChange={e => setMarcaCelular(e.target.value)}/>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Modelo do celular:</strong></label>
                                    <input type="text" name="mode_celular" id="modelo_celular_cliente" value={ModeloCelular} onChange={e => setModeloCelular(e.target.value)}/>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario  data-preço">
                            <div class="input-name">
                                <label><strong>Data entrega na loja:</strong></label>
                                <input type="date" name="data-entrega-loja" id="data_entrega_loja_cliente" value={entrega} onChange={e => setEntrega(e.target.value)}/>
                                <hr  width="220" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Data devolução cliente:</strong></label>
                                    <input type="date" name="data-devolu-cliente" id="data_devolu_cliente" value={devolucao} onChange={e => setDevolucao(e.target.value)}/>
                                    <hr  width="250" class="separa-cont-consulta"/>
                                </div>
                            </div>
                            <div>
                                <div class="input-name">
                                    <label><strong>Preço final:</strong></label>
                                    <input type="text"  placeholder='R$' value={preco} onChange={e => setPreco(e.target.value)}></input>
                                    <hr  width="200" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div class="entrada-formulario">
                            <div class="input-name">
                                <label><strong>Problema celular:</strong></label>
                                <textarea class="problema-cllr" cols="30" rows="10" value={problema} onChange={e => setProblema(e.target.value)}></textarea>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                        </div>

                        <div class="botao-login">
                            <button onClick={ClickCadastrar}> Cadastrar </button>
                        </div>
                        <div className='msg-erro'>
                            {erro}
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}