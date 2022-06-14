import './index.scss';
import '../../common/common.scss'

import ImgMenuHome from '../../assets/image/logo-menu-home.png';
import ImgOndasUm from '../../assets/image/Primeiraonda-landingpage.png';
import foneBlue from '../../assets/image/fone-produto.png';
import Caixinha from '../../assets/image/caixasom-produto.png';
import Carregador from '../../assets/image/carregador-portatil.png';
import relogio from '../../assets/image/relogio-produto.png';
import SetaEsquerda from '../../assets/image/porta-2.png';
import SetaDireira from '../../assets/image/porta-1.png';
import { NavLink } from 'react-router-dom';

export default function Home(){
    return(
        <div className="Pagina-home">
            <main>
                <section className='faixa-1'>
                    <header className='header-fx1'>
                        <div className='menu-home'>
                            <img className='img-menu-home' src={ImgMenuHome} alt=''></img>
                            <NavLink>Menu</NavLink>
                        </div>
                        
                        <div className='login-home'>
                            <a>Nossa Historia</a>
                            <a>Login</a>
                        </div>
                    </header>
                    <main className='main-fx1'>
                        <div className='ondas-fx1'>
                          
                       </div>
                    </main>
                       
                            
                </section>
                <section className='faixa-2-produtos'>
                        <div className='titulo-fx2'>
                            <h1>Produtos</h1>
                        </div>
                        <div className='parte-produtos'>
                            <div className='img-seta-esquer-fx2'>
                                <img className='img-seta-produto' src={SetaEsquerda}></img>
                            </div>
                        
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={foneBlue} alt=''></img>
                                <div className='text-cards'>
                                    <p>Fone Bluetooth</p>
                                    <h4>R$189,90</h4>
                                </div>
                            </div>
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={Caixinha} alt=''></img>
                                <div className='text-cards'>
                                    <p>Caixa de Som</p>
                                    <h4>R$139,90</h4>
                                </div>
                               
                            </div>

                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={relogio} alt=''></img>
                                <div className='text-cards'>
                                    <p>Relogio Cassio</p>
                                    <h4>R$279,90</h4>
                                </div>
                            </div>
                            <div className='card-produtos'>
                                <img className='imgs-produtos' src={Carregador} alt=''></img>
                                <div className='text-cards'>
                                    <p>Carregador portátil</p>
                                    <h4>R$159,90</h4>
                                </div>
                            </div>

                            <div className='img-seta-direita-fx2'>
                                <img className='img-seta-produto' src={SetaDireira} alt=''></img>
                            </div>
                        </div>

                    <section>
                        <div class='mapinha'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.404723282801!2d-46.7146446!3d-23.7329428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4ef95a0dc691%3A0x102a145c722a28aa!2sRua%20Acaccio%20Fontoura%2C%20336%20-%20Jardim%20Vista%20Alegre%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004831-050!5e0!3m2!1spt-BR!2sbr!4v1654141388401!5m2!1spt-BR!2sbr" width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p class='texto-m'>Rua chala zingerevetz  jardim-guarujá , São paulo-sp , 058736-030,Brasil</p>
                        </div>
                    </section>

                       
                </section>
            </main>
        </div>
    )
}