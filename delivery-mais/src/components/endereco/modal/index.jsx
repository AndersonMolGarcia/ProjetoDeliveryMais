import Modal from 'react-modal';
import './style.css';
import closeIcon from "../../../assets/close.png";
import { useEffect, useState } from 'react';
import api from '../../../services/api';


function EnderecoModal(props) {

    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");

    const [cidades, setCidades] = useState([]);
    const [cidade, setCidade] = useState("");

    const [uf, setUf] = useState("");
    const [codCidade, setCodCidade] = useState("");
    const [cep, setCep] = useState("");



    function SalvarCidade(e) {
        const [cid, est] = e.target[e.target.selectedIndex].text.split(" - ");
        setCidade(cid);
        setUf(est);
        setCodCidade(e.target.value)
    }

    function CarregarComboBoxCidades() {
        api.get('/v1/cidades')
            .then(response => setCidades(response.data))
            .catch(err => console.error(err));
    }

    function SalvarEndereco() {

    }

    useEffect(() => {
        CarregarComboBoxCidades();
    }, []);



    return <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" onClick={props.onRequestClose} className='react-modal-close'>
            <img src={closeIcon} alt="Fechar" />
        </button>

        <div className='container-fluid h-100 endereco'>
            <div className='col-12 mt-4'>
                <h4 className='mt-2 mb-4'>Editar Endereço</h4>

                <form>
                    <div className='row'>
                        <div className='mb-3 col-sm-12 col-md-8 col-lg-8 '>
                            <label htmlFor="InputEndereco">Endereço</label>
                            <input
                                type="text"
                                name="InputEndereco"
                                id="InputEndereco"
                                className='form-control mb-2'
                                aria-describedby='InputEndereco'
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4 mb-3'>
                            <label htmlFor="InputComplemento">Compl.</label>
                            <input
                                type="text"
                                name="InputComplemento"
                                id="InputComplemento"
                                className='form-control mb-2'
                                aria-describedby='InputComplemento'
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                        </div>
                        <div className='col-12 mb-3'>
                            <label htmlFor="InputBairro">Bairro</label>
                            <input
                                type="text"
                                name="InputBairro"
                                id="InputBairro"
                                className='form-control mb-2'
                                aria-activedescendant='InputBairro'
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />
                        </div>
                        <div className='col-12'>
                            <label htmlFor="SelectCidade">Cidade</label>
                            <div className='form-control mb-3'>
                                <select name="cidades" id="cidades" onChange={SalvarCidade} value={codCidade}>
                                    <option value="000000">Escolha a cidade</option>

                                    {
                                        cidades.map(c => {
                                            return <option value={c.cod_cidade} key={c.cod_cidade}>
                                                {c.cidade} - {c.uf}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <label htmlFor="InputCep">CEP</label>
                            <input
                                type="text"
                                name="InputCep"
                                id="InputCep"
                                className='form-control mb-2'
                                aria-activedescendant='InputCep'
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            />
                        </div>
                    </div>
                </form>


            </div>

            <div className='row mb-3'>
                <div className='col-12 mt-3 d-flex justify-content-end' align-items-center>
                    <button onClick={SalvarEndereco} type="button" className='btn btn-lg btn-danger'>Salvar Dados</button>
                </div>
            </div>


        </div>
    </Modal>
};



export default EnderecoModal;