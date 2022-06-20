import { login } from '../../api/funcionarioAPI.js';
import storage from 'local-storage'
import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss';
import '../../common/common.scss'

import logoLogin from '../../assets/image/Logo-tela-login.png';
import Saida from '../../assets/image/Foto-saida.png';




export default function Login(){
    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');
    const [ erro, setErro] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        if (storage('usuario-logado')) {
            navigate('/')    
        }
    },[])

    async function ClickEntrar() {
        try {
            const resposta = await login(email, senha);
            storage('usuario-logado', resposta)

            navigate('/menu');
            
        } catch (err) {
            if (err.response.status === 401) {
                setErro(err.response.data.erro)
            }
        }
    }

    return(
        <div className="Pagina-login">
            <main>
                <Link to='/home' className='atalho-saida'>
                    <img className='img-saida-topo' src={Saida} alt=""/>
                    <p>Sair</p>
                </Link>
                <div className='cont-principal'>
                    <div className='logo-empresa'>
                        <img class="logo-empresa-img" src={logoLogin} alt=""/> 
                    </div>
                    <div className='caixas-entrada'>
                        <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type='password' placeholder='***' value={senha} onChange={e => setSenha(e.target.value)}></input>
                    </div>
                    <div className='msg-erro'>
                        {erro}
                    </div>
                    
                    <div className='botao-login'>
                        <button onClick={ClickEntrar}> Entrar </button>
                    </div>
                </div>
            </main>
        </div>
        
    )
}