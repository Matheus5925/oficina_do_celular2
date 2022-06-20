import './index.scss';
import { Link } from 'react-router-dom'

import FuncionarioEntrar from '../../assets/image/Logo-cadastro-novo.png';
import LupaLateral from '../../assets/image/logo-consulta-novo.png';

export default function DashbordLateral() {
    return(
        <section className='lateral-consulta'>
                <div className='dahsboard-lateral'>
                    <div className= 'cadastro-consulta'>
                        <Link to='/cadastrar'> Cadastro </Link>
                        <img className='imgs-cadas-consult' src={FuncionarioEntrar} alt=""/>
                    </div>

                    <hr className='linha-divisoria'></hr>

                    <div className='cadastro-consulta'>
                        <Link to='/consultar'> Consulta </Link>
                        <img className='imgs-cadas-consult' src={LupaLateral} alt=""/>
                    </div>

                    <hr className='linha-divisoria'></hr>
                    

                </div>
        </section>
    )
}