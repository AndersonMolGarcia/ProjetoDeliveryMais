 import { useEffect, useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import './style.css';
import Endereco from "../../components/endereco/lista/index.jsx";
import Navbar from '../../components/navbar/index.jsx';
import api from '../../services/api.js';





function TrocarEndereco(props) {

    const navigate = useNavigate();

    const [enderecos, setEnderecos] = useState([]);

    function ListarEnderecos() {
        api.get(`/v1/usuarios/enderecos`)
            .then(response => setEnderecos(response.data))
            .catch(err => console.error(err));
    }

    function TrocarEndereco(endereco) {        
        localStorage.setItem("sessionCidade", JSON.stringify(endereco.cidade));
        localStorage.setItem("sessionUf", JSON.stringify(endereco.uf));
        localStorage.setItem("sessionCodCidade", JSON.stringify(endereco.cod_cidade));
        navigate('/');
    }

    useEffect(() => {
        ListarEnderecos();
    }, []);

    return (

        <div className='container-fluid mt-page '>
            <Navbar />

            

            <div className='row col-lg-6 offset-lg-3'>

                <div className='col-12 mt-4 d-flex justify-content-between'>
                    <h2 className='mt-2'>Selecione seu endereço</h2>                    
                </div>

                <div className='row mt-5'>
                    {
                        enderecos.map(endereco => {
                            return <Endereco
                                key={endereco.id_endereco}
                                id_endereco={endereco.id_endereco}
                                endereco={endereco.endereco}
                                complemento={endereco.complemento}
                                bairro={endereco.bairro}
                                cidade={endereco.cidade}
                                uf={endereco.uf}
                                cep={endereco.cep}
                                ind_padrao={endereco.ind_padrao}
                                cod_cidade={endereco.cod_cidade}
                                onClickTrocarEndereco={TrocarEndereco}
                            />
                        })
                    }
                </div>

            </div>

        </div>
    );
};



export default TrocarEndereco;