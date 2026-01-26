import './style.css';
import Endereco from "../../components/endereco/lista/index.jsx";
import Navbar from '../../components/navbar/index.jsx';
import { useEffect, useState } from 'react';
import api from '../../services/api.js';
import EnderecoModal from '../../components/endereco/modal/index.jsx';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



function Enderecos(props) {

    const [enderecos, setEnderecos] = useState([]);
    const [isEnderecoOpen, setIsEnderecoOpen] = useState(false);
    const [dadosEndereco, setDadosEndereco] = useState([]);

    function ListarEnderecos() {
        api.get(`/v1/usuarios/enderecos`)
            .then(response => setEnderecos(response.data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        ListarEnderecos();
    }, []);

    function openModalEndereco(id) {

        if (id > 0) {
            api.get(`v1/usuarios/enderecos/${id}`)
                .then(response => {
                    setDadosEndereco(response.data[0]);
                    setIsEnderecoOpen(true);
                })
                .catch(err => console.error(err));
        } else {
            setDadosEndereco([]);
            setIsEnderecoOpen(true);
        }


    }

    function closeModalEndereco() {
        setIsEnderecoOpen(false);
        ListarEnderecos();
    }

    function ExcluirEndereco(id) {

        confirmAlert({
            title: 'Exclusão',
            message: 'Confirma a exclusão do endereço?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        api.delete(`/v1/usuarios/enderecos/${id}`)
                            .then(response => ListarEnderecos())
                            .catch(err => { console.error(err) })
                    }
                },
                {
                    label: 'Não',
                    onClick: () => { }
                }
            ]
        });


    }

    function EnderecoPadrao(id) {
        api.patch(`/v1/usuarios/enderecos/padrao/${id}`)
        .then(response => {
            ListarEnderecos();
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (

        <div className='container-fluid mt-page '>
            <Navbar />

            <EnderecoModal
                isOpen={isEnderecoOpen}
                onRequestClose={closeModalEndereco}
                dados_endereco={dadosEndereco}
            />

            <div className='row col-lg-6 offset-lg-3'>

                <div className='col-12 mt-4 d-flex justify-content-between'>
                    <h2 className='mt-2'>Meus Endereços</h2>
                    <button className='btn btn-sm btn-outline-danger' onClick={(e) => openModalEndereco(0)}>Adicionar Endereço</button>
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
                                onClickEditEndereco={openModalEndereco}
                                onClickDeleteEndereco={ExcluirEndereco}
                                onClickEnderecoPadrao={EnderecoPadrao}

                            />
                        })
                    }
                </div>

            </div>

        </div>
    );
};



export default Enderecos;