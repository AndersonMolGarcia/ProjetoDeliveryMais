import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sidebar from './components/sidebar/index.jsx';
import Busca from './pages/busca/index.jsx';
import Favoritos from './pages/favoritos/index.jsx';
import Perfil from './pages/perfil/index.jsx';
import Enderecos from './pages/enderecos/index.jsx';
import Pedidos from './pages/pedidos/index.jsx';
import Cardapio from './pages/cardapio/index.jsx';
import Login from "./pages/login/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";


function Rotas() {
    return <>
        <Sidebar />

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/busca" element={<Busca />} />
                <Route exact path="/favoritos" element={<Favoritos />} />
                <Route exact path="/perfil" element={<Perfil />} />
                <Route exact path="/enderecos" element={<Enderecos />} />
                <Route exact path="/pedidos" element={<Pedidos />} />
                <Route exact path="/cardapio/:id" element={<Cardapio />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>

    </>
};


export default Rotas;