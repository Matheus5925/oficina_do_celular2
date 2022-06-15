import { login } from '../../api/funcionarioAPI.js';
import storage from 'local-storage'
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
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
            navigate('/');     
        }
    }, [])

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
                <div class="atalho-saida">
                    <img className='' class="img-saida-topo" src={Saida} alt=""/>
                    <a href="../Home/index.html">Exit</a>
                </div>
                <div class="cont-principal">
                    <div class="logo-empresa">
                        <img class="logo-empresa-img" src={logoLogin} alt=""/> 
                    </div>
                    <div class="caixas-entrada">
                        <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type='password' placeholder='***' value={senha} onChange={e => setSenha(e.target.value)}></input>
                    </div>
                    <div className='msg-erro'>
                        {erro}
                    </div>
                    
                    <div class="botao-login">
                        <button onClick={ClickEntrar}> Login </button>
                    </div>
                </div>
            </main>
        </div>
        
    )
}