import './index.scss';

import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';

export default function DashbordLateral() {
    return(
        <section class="lateral-consulta">
                <div class="dahsboard-lateral">
                    <div class="cadastro-consulta">
                        <a href="/cadastrar">Cadastro</a>
                        <img class="imgs-cadas-consult" src={FuncionarioEntrar} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>

                    <div class="cadastro-consulta">
                        <a href="/consultar"> Consulta </a>
                        <img class="imgs-cadas-consult" src={LupaLateral} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>

                </div>
        </section>
    )
}