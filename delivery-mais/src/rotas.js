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
import TrocarEndereco from "./pages/trocar-endereco/index.jsx";
import PrivateRoute from "./components/private-route/index.jsx";


function Rotas() {
    return <>
        <Sidebar />

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route exact path="/busca" element={<PrivateRoute><Busca /></PrivateRoute>} />
                <Route exact path="/favoritos" element={<PrivateRoute><Favoritos /></PrivateRoute>} />
                <Route exact path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
                <Route exact path="/enderecos" element={<PrivateRoute><Enderecos /></PrivateRoute>} />
                <Route exact path="/pedidos" element={<PrivateRoute><Pedidos /></PrivateRoute>} />
                <Route exact path="/cardapio/:id" element={<PrivateRoute><Cardapio /></PrivateRoute>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cadastro" element={<Cadastro />} />
                <Route exact path="/trocar-endereco" element={<PrivateRoute><TrocarEndereco/></PrivateRoute>} />
            </Routes>
        </BrowserRouter>

    </>
};


export default Rotas;