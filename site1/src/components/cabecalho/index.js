import './index.scss';
import setaFuncionario from '../../assets/image/Polygon 9.png';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {
    const navigate = useNavigate();
    const [funcionario, setFuncionario] = useState('-');


    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        } else{
            const usuariologado = storage('usuario-logado');
            setFuncionario(usuariologado.Nome)
        }
    }, [])

    return(
        <header className='cont-Cabecalho'>
            <div class="conteudo-header">
                <div class="img-seta-div">
                    <img class="img-seta" src={setaFuncionario} alt=""/>
                </div>
                <div className='funcionario'>
                    <span>{funcionario[0]}</span>
                </div>
                <div class="dados-funcionario-header">
                    <a href="" class="nome-funcionario">{funcionario}</a>
                    <a href="" class="status-funcionario">Status</a>
                </div>
            </div>
        </header>
    )
}