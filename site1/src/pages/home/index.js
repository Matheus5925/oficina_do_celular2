 import './index.scss';
 import '../../common/common.scss'
 import storage from 'local-storage';
 import { useNavigate } from 'react-router-dom';

 import ImgMenuHome from '../../assets/image/logo-menu-home.png';
 import Apple from '../../assets/image/logo-apple.png';
 import Samsung from '../../assets/image/samsung-logo.png';
 import Xiaomi from '../../assets/image/xiaomi-logo.png';
 import LG from '../../assets/image/logo-lg.png';
 import LinkInsta from '../../assets/image/link-instagram.png'
 import LinkWhats from '../../assets/image/link-whats.png'
 import Motorola from '../../assets/image/motorola-logo.png';
 import boneco from '../../assets/image/boneco-logo-rodape.png'
 import foneBlue from '../../assets/image/fone-produto.png';
 import Caixinha from '../../assets/image/caixasom-produto.png';
 import Carregador from '../../assets/image/carregador-portatil.png';
 import relogio from '../../assets/image/relogio-produto.png';
 import SetaEsquerda from '../../assets/image/porta-2.png';
 import SetaDireira from '../../assets/image/porta-1.png';
 import Tecnico from '../../assets/image/tecnico.png'
 import PortaEntrada from '../../assets/image/porta-home.png'
 import { Link } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate()

    function VerificarLoginParaOMenu() {
        if (!storage('usuario-logado')) {
            navigate('/login')
        } else{
            navigate('/menu')
        }
    }

    return(
        <div className="Pagina-home">
                 <main>
                
                    <section className='faixa-1'>
                        <header className='header-fx1'>
                            <div onClick={VerificarLoginParaOMenu} className='menu-home'>
                                <img className='img-menu-home' src={ImgMenuHome} alt=''></img>
                                <p>Menu</p>
                            </div>
                            
                            <Link to='/' className='login-home'>
                                <a>Login</a>
                                <img className='img-menu-home'  src={PortaEntrada} alt=''></img>
                            </Link>
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
                </section>
                <section className='faixa3'>
                          
                        <div className='textos'>
                            <h1 className='TITULO'> QUEM NÓS SOMOS ? </h1>
                            <p className ='p1'> A oficina do celular foi criada em 2015 por Bruno Marques Vieira  ele criou a empresa com o intuito de fazer algo que ele gostava e ainda assim resolver algo que via como um deficete no cotidiano das pessoas ao seu redor como uma manutenção de qualidade e com preços acessivel ao cliente , com um serviço honesto. </p>
                            <p className='p2'>Então ele saiu em busca dos melhores fornecedores de algunns contatos na área e no meio dessa correria toda ainda sim fez varios cursos  complementares para fornecer o melhor atendimento possivel para seus clientes e depois de muitas falhas e acertos ele conseguiu fazer sua tão esperada loj atingindo seu proposito. </p>
                            <p className = 'p3'>Agora seu  foco é na expansão e levar os excelentes serviços dele para outros lugares e virar um nome cada vez mais conhecido e temido no mercado. </p>
                           
                        </div>
                        <div className='imagem'>
                                <img  className='tecnico' src={Tecnico} alt='' ></img>    
                        </div>
                </section>
                <section className='faixa4'>
                    <iframe className='mapinha' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4095914651007!2d-46.714486799999996!3d-23.7327691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4ef95078ef9d%3A0xf68bef1ada5f2698!2sRua%20Acaccio%20Fontoura%2C%20339%20-%20Jardim%20Santa%20Rita%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004831-050!5e0!3m2!1spt-BR!2sbr!4v1655837880793!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <footer className='rodapé'>
                    <div className='logo-oficina'>
                        <img className='logo-site-rodape' src={boneco} alt=''></img>
                    </div>
                    <div className='logos-marcas'>
                        <img className='logo-site-rodape' src={Apple} alt=''></img>
                        <img className='logo-samsung' src={Samsung} alt=''></img>
                        <img className='logo-site-rodape' src={LG} alt=''></img>
                        <img className='logo-site-rodape' src={Xiaomi} alt=''></img>
                        <img className='logo-site-rodape' src={Motorola} alt=''></img>
                    </div>
                    <div className='links'>
                        <a href=''><img className='logo-link' src={LinkInsta} alt=''></img></a>
                        <a href=''><img className='logo-link' src={LinkWhats} alt=''></img></a>
                    </div>
                    
                </footer>
            </main>
        </div>
    )
}
