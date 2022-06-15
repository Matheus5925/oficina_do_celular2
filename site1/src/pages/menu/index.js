import './index.scss';
import '../../common/common.scss'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';
import Saida from '../../assets/image/Foto-saida.png';





export default function Menu(){

    const navigate = useNavigate();

    function SairClick() {
        storage.remove('usuario-logado');
        navigate('/')

    }

    return(
        <div className="Pagina-menu">
            <Cabecalho></Cabecalho>
           
            <main>
                <DashbordLateral></DashbordLateral>
                <section class="segunda-parte">
                <div onClick={SairClick} class="atalho-saida">
                    <img class="img-saida-topo" src={Saida} alt=""/>
                    <a href="">Exit</a>
                </div>
                </section>
            </main>
        </div>
    )
}
