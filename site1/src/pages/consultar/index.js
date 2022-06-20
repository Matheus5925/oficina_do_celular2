import './index.scss';
import '../../common/common.scss'
import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';
import { Link } from 'react-router-dom';
import { ConsultarTodosServicos, ConsultarTodosServicosporNome, ConsultarTodosServicosporCpf, DeletarServico, alterarServicos } from '../../api/servicosAPI'
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


import PortaSaida from '../../assets/image/Foto-saida.png';
import lapisEdicao from '../../assets/image/pencil-edicao-consulta.png';
import deletarConsulta from '../../assets/image/delete-consulta.png'
import LupaLateral from '../../assets/image/logo-consulta-novo.png';
import { useEffect, useState } from 'react';

export default function Consultar(){
    const [servicos, setServicos] = useState([]);
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCpf, setFiltroCpf] = useState('');

    const navigate = useNavigate();

    async function ExibirDetalhes(id) {
        navigate(`/consultarDetalhes/${id}`)
    }

    async function AlterarServico(id) {
        navigate(`/cadastrar/alterar/${id}`)
    }

    async function removerServico(id, nome) {
        confirmAlert({
            title: 'Remover Serviço',
            message: `Deseja mesmo remover o serviço${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await DeletarServico(id, nome)
                        if (filtroNome === '') 
                            ConsultarTodos();
                        else
                            ConsultarNome();
                
                        toast('filme removido!!')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }


   
    async function ConsultarCpf() {
        const resp = await ConsultarTodosServicosporCpf(filtroCpf);
        setServicos(resp)
    }

    async function ConsultarNome() {
        const resp = await ConsultarTodosServicosporNome(filtroNome);
        if (filtroNome === '') 
            ConsultarTodos();
        setServicos(resp);
    }

    async function ConsultarTodos() {
        const resp = await ConsultarTodosServicos();
        setServicos(resp);
    }

   
    useEffect(() => {
        ConsultarTodos();
    }, [])

    return(
    <div className="Pagina-consultar">
        <Cabecalho></Cabecalho>
     
        <main>
           <DashbordLateral></DashbordLateral>
            
            <section className='pesquisa-consulta'>
                <div className='saida-landing'>
                    <Link to='/menu'><img className='img-saida' src={PortaSaida} alt=""/></Link>
                </div>
                <div className='consulta-pesquisa'>
                    <div className='caixa-entrada'>
                        <input type='text' placeholder='Nome do Cliente' value={filtroNome} onChange={e => setFiltroNome(e.target.value)} ></input>
                        <img className='lupa-consulta' src={LupaLateral} onClick={ConsultarNome} alt='Imagem da lupa'></img>

                        <input type='text' pattern='\d{3}\.\d{3}\.\d{3}-\d{2}' 
                        title='Digite um CPF no formato: xxx.xxx.xxx-xx' placeholder='CPF' maxLength='14' value={filtroCpf} onChange={e => setFiltroCpf(e.target.value)}></input>
                        <img className='lupa-consulta' src={LupaLateral} onClick={ConsultarCpf} alt='Imagem da lupa'></img>
                    </div>
                  

                    <table>
                        <tbody>
                        {servicos.map(item =>
                            <tr key={item.id} onClick={() => ExibirDetalhes(item.id)}>
                                <th>ID:</th>
                                <td>{item.id}</td>
                                <th>Nome:</th>
                                <td>{item.nome}</td>
                                <th>CPF:</th>
                                <td>{item.cpf}</td>
                                <td>
                                    <button onClick={e =>
                                        {e.stopPropagation();
                                         AlterarServico(item.id)}}>
                                        <img className='edit-delete-consult' src={lapisEdicao} alt=""/>
                                    </button>
                                    <button onClick={e => 
                                        {e.stopPropagation();
                                         removerServico(item.id, item.nome)}}>
                                        <img className='edit-delete-consult' src={ deletarConsulta} alt=""/>
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    
    </div>
    )
}