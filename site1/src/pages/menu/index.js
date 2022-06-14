import './index.scss';
import '../../common/common.scss'
import Cabecalho from '../../components/cabecalho';
import DashbordLateral from '../../components/lateral';





export default function Menu(){
    return(
        <div className="Pagina-menu">
            <Cabecalho></Cabecalho>
           
            <main>
                <DashbordLateral></DashbordLateral>
                <section class="segunda-parte">
                    
                </section>
            </main>
        </div>
    )
}
