import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';
import Menu from './pages/menu';
import Login from './pages/login';
import Home from './pages/home';
import ConsultarDetalhes from './pages/consultar/detalhes.js';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/cadastrar' element={<Cadastrar/>}></Route>
                <Route path='/consultar' element={<Consultar/>}></Route>
                <Route path='/consultarDetalhes' element={<ConsultarDetalhes/>}></Route>
                <Route path='/menu' element={<Menu/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}