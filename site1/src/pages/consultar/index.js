import './index.scss';
import '../../common/common.scss'
import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';
import { Link } from 'react-router-dom';


import PortaSaida from '../../assets/image/Foto-saida.png';
import lapisEdicao from '../../assets/image/pencil-edicao-consulta.png';
import deletarConsulta from '../../assets/image/delete-consulta.png'

export default function Consultar(){
    return(
    <div className="Pagina-consultar">
        <Cabecalho></Cabecalho>
     
        <main>
           <DashbordLateral></DashbordLateral>
            
            <section class="pesquisa-consulta">
                <div class="saida-landing">
                    <Link to='/menu'><img class="img-saida" src={PortaSaida} alt=""/></Link>
                </div>
                <div class="consulta-pesquisa">
                    <div class="caixa-entrada">
                        <input type='text' placeholder='Nome do Cliente' ></input>
                        <input type='text' pattern='\d{3}\.\d{3}\.\d{3}-\d{2}' 
                        title='Digite um CPF no formato: xxx.xxx.xxx-xx' placeholder='CPF' maxLength='14'></input>
                    </div>
                  

                    <table>
                        <tr>
                            <th>ID:</th>
                            <td>1</td>
                            <th>Nome:</th>
                            <td>Gabrielle Ueda Alencar</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>

                        <tr >
                            <th>ID:</th>
                            <td>2</td>
                            <th>Nome:</th>
                            <td>Millena Custodio Senna</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th>ID:</th>
                            <td>3</td>
                            <th>Nome:</th>
                            <td>Felipe Neres</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th>ID:</th>
                            <td>4</td>
                            <th>Nome:</th>
                            <td>Otavio de Jesus</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th>ID:</th>
                            <td>5</td>
                            <th>Nome:</th>
                            <td>Mariana Ferreira</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th>ID:</th>
                            <td>5</td>
                            <th>Nome:</th>
                            <td>Gabrielle Ueda Alencar</td>
                            <th>CPF:</th>
                            <td>XXX.XXX.XXX-XX</td>
                            <td>
                                <button>
                                    <img class="edit-delete-consult" src={lapisEdicao} alt=""/>
                                </button>
                                <button type="reset">
                                    <img class="edit-delete-consult" src={deletarConsulta} alt=""/>
                                </button>
                            </td>
                        </tr>
                    </table>

                </div>
            </section>
        </main>
    
    </div>
    )
}