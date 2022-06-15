import './index.scss';
import setaFuncionario from '../../assets/image/Polygon 9.png';
import { useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
    }, [])

    return(
        <header className='cont-Cabecalho'>
            <div class="conteudo-header">
                <div class="img-seta-div">
                    <img class="img-seta" src={setaFuncionario} alt=""/>
                </div>
                <div class="image-header">
                    <input type="image" id="campo-imagem-funcionario" class="campo-imagem-funcionario" />
                </div>
                <div class="dados-funcionario-header">
                    <a href="" class="nome-funcionario">Nome do funcionario</a>
                    <a href="" class="status-funcionario">Status</a>
                </div>
            </div>
        </header>
    )
}