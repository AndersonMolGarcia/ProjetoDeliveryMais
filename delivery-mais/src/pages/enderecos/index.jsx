import './style.css';
import Endereco from "../../components/endereco/lista/index.jsx";
import Navbar from '../../components/navbar/index.jsx';
import { useEffect, useState } from 'react';
import api from '../../services/api.js';    
import EnderecoModal from '../../components/endereco/modal/index.jsx';



function Enderecos(props) {

    const [enderecos, setEnderecos] = useState([]);

    const [isEnderecoOpen, setIsEnderecoOpen] = useState(false);

    function ListarEnderecos() {
        api.get(`/v1/usuarios/enderecos`)
            .then(response => setEnderecos(response.data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        ListarEnderecos();
    }, []);

    function openModalEndereco() {
        setIsEnderecoOpen(true);
    }

    function closeModalEndereco() {
        setIsEnderecoOpen(false);
    }

    return (
        
        <div className='container-fluid mt-page '>
            <Navbar />
            
            <EnderecoModal 
                isOpen={isEnderecoOpen}
                onRequestClose={closeModalEndereco}
            />

            <div className='row col-lg-6 offset-lg-3'>

                <div className='col-12 mt-4 d-flex justify-content-between'>
                     <h2 className='mt-2'>Meus Endereços</h2>
                     <button className='btn btn-sm btn-outline-danger' onClick={openModalEndereco}>Adicionar Endereço</button>
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

                            />
                        })
                    }
                </div>

            </div>
           
        </div>
    );
};



export default Enderecos;