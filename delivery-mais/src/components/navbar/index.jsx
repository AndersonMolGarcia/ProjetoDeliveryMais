import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import './style.css';
import { useState } from "react";


function Navbar() {

    
    const navigate = useNavigate();
    const [busca, setBusca] = useState("");
    
    function Buscar() {
        navigate(`/busca?q=${busca}`);        
    }

    function openSidebar() {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }

    return (
        <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light ps-3 pe-3 ">
        
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="mt-1" src={logo} alt="Logotipo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="ms-auto me-auto mt-1">
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Procurar um restaurante..." 
                            aria-label="Recipient’s username" 
                            aria-describedby="button-addon2" 
                            onChange={(e) => setBusca(e.target.value)}
                        />
                        <button onClick={Buscar} className="btn btn-danger" type="button" id="button-addon2"><i className="fas fa-search"></i>Buscar</button>
                    </div>
                </div>

                <div className="mt-1">
                    <button className="btn btn-outline-danger me-3"><i className="fa-solid fa-location-dot"></i>Entrega: São Paulo</button>
                    {
                        // <button className="btn btn-outline-danger me-3"><i class="fa-solid fa-arrow-right-to-bracket"></i> Acessar</button>       
                    }
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-danger me-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to="/pedidos" className="dropdown-item">Pedidos</Link></li>
                            <li><Link to="/favoritos" className="dropdown-item">Favoritos</Link></li>
                            <li><Link to="/perfil" className="dropdown-item">Perfil</Link></li>
                            <li><Link to="/enderecos" className="dropdown-item">Meus Endereços</Link></li>                           
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/" className="dropdown-item">Sair</Link></li>
                        </ul> 
                    </div>

                    <button onClick={openSidebar} className="btn btn-outline-danger me-3"><i className="fas fa-shopping-bag"></i>Sacola</button>

                </div>

                



            </div>
        </nav>
    )
}

export default Navbar;
