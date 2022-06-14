import './index.scss';
import setaFuncionario from '../../assets/image/Polygon 9.png';

export default function Cabecalho() {
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