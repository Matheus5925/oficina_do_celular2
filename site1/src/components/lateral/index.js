import './index.scss';
import { Link } from 'react-router-dom'

import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';

export default function DashbordLateral() {
    return(
        <section class="lateral-consulta">
                <div class="dahsboard-lateral">
                    <div class="cadastro-consulta">
                        <Link to='/cadastrar'> Cadastro </Link>
                        <img class="imgs-cadas-consult" src={FuncionarioEntrar} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>

                    <div class="cadastro-consulta">
                        <Link to='/consultar'> Consulta </Link>
                        <img class="imgs-cadas-consult" src={LupaLateral} alt=""/>
                    </div>

                    <hr class="linha-divisoria"></hr>
                    

                </div>
        </section>
    )
}