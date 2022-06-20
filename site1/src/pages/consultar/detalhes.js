import './detalhes.scss';
import '../../common/common.scss'
import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';
import { Link, useParams } from 'react-router-dom';
import { BuscaId } from '../../api/servicosAPI';



import PortaSaida from '../../assets/image/Foto-saida.png';
import { useEffect, useState } from 'react';

export default function ConsultaDetalhes(){
    const [servico, setServico] = useState({});

    const { idParam } = useParams();

    useEffect(() =>{
        CarregarServico();
    }, [])

    async function CarregarServico() {
        const resposta = await BuscaId(idParam);
        setServico(resposta);

    }

    return(
        <div className="Pagina-cadastrar">
           <Cabecalho></Cabecalho>
            <main>
               <DashbordLateral></DashbordLateral>
                <section className='form-parte2'>
                    <div className='saida-landing'>
                        <Link to='/consultar'><img class="img-saida" src={PortaSaida} alt=""/></Link>
                    </div>
                    <div className='formulario-de-cadastro'>

                        <div className='entrada-formulario'>
                            <div className='input-name'>
                                <label><strong>Nome:</strong></label>
                                <p>{servico.nome}</p>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div className='input-name'>
                                    <label><strong>E-mail:</strong></label>
                                    <p>{servico.Email}</p>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>


                        <div className='entrada-formulario'>
                            <div className='input-name'>
                                <label><strong>Telefone de contato:</strong></label>
                                <p>{servico.Telefone}</p>
                                <hr  width="320" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div className='input-name'>
                                    <label><strong>CPF:</strong></label>
                                    <p>{servico.cpf}</p>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div className='entrada-formulario'>
                            <div className='input-name'>
                                <label><strong>Marca do celular:</strong></label>
                               <p>{servico.Marca}</p>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div className='input-name'>
                                    <label><strong>Modelo do celular:</strong></label>
                                    <p>{servico.Modelo}</p>
                                    <hr  width="350" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div className='entrada-formulario  data-preço'>
                            <div className='input-name'>
                                <label><strong>Data entrega na loja:</strong></label>
                               <p>{servico.Entrega && servico.Entrega.substr(0, 10)}</p>
                                <hr  width="220" class="separa-cont-consulta"/>
                            </div>
                            <div>
                                <div className= 'input-name'>
                                    <label><strong>Data devolução cliente:</strong></label>
                                    <p>{servico.Devolução && servico.Devolução.substr(0, 10)}</p>
                                    <hr  width="250" class="separa-cont-consulta"/>
                                </div>
                            </div>
                            <div>
                                <div className='input-name'>
                                    <label><strong>Preço final:</strong></label>
                                    <p>{servico.Preço}</p>
                                    <hr  width="200" class="separa-cont-consulta"/>
                                </div>
                            </div>
                        </div>

                        <div className='entrada-formulario'>
                            <div className='input-name'>
                                <label><strong>Problema celular:</strong></label>
                                <p>{servico.Defeito}</p>
                                <hr  width="350" class="separa-cont-consulta"/>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </div>
    )
}