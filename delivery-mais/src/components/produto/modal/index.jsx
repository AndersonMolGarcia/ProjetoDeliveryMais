import Modal from 'react-modal';
import './style.css';
import closeIcon from '../../../assets/close.png';
import ProdutoItemRadio from '../produto-item-radio';
import ProdutoItemCheckbox from '../produto-item-checkbox';
import { useEffect, useState } from 'react';
import api from '../../../services/api.js';

function ProdutoModal(props) {

    const [id_produto, setIdProduto] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [vl_produto, setVlProduto] = useState("");
    const [vl_promocao, setVlPromocao] = useState("");
    const [url_foto, setUrlFoto] = useState("");

    function ListarDadosProduto() {
        api.get(`v1/produtos/${props.id_produto}`)
            .then(response => {
                setIdProduto(props.id_produto)
                setNome(response.data[0].nome)
                setDescricao(response.data[0].descricao)
                setVlProduto(response.data[0].vl_produto)
                setVlPromocao(response.data[0].vl_promocao)
                setUrlFoto(response.data[0].url_foto)

                console.log(props.id_produto)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {

        if (!props.id_produto) return;
        ListarDadosProduto();

    }, [props.id_produto]);


    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}

            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type='button' onClick={props.onRequestClose} className='react-modal-close'>
                <img src={closeIcon} alt="Fechar" />
            </button>


            <div className='container-fluid h-100 produto-modal'>
                <div className='row detalhes-produto'>
                    <div>
                        <img className='img-fluid rounded img-produto-modal' src={url_foto} alt="Produto" />
                    </div>

                    <div className='col-12 mt-4'>
                        <h4 className='mt-2'>{nome}</h4>
                        <small className='d-block mb-3'>{descricao}</small>

                        {
                            vl_promocao > 0 ?
                                <>
                                    <small className='mt-3 promocao'>
                                        {
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vl_promocao)
                                        }
                                    </small>
                                    <small className='mt-3 ms-4 preco-antigo'>
                                        {
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vl_produto)
                                        }
                                    </small>
                                </>
                                :
                                <small className='mt-3'>
                                    {
                                        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(vl_produto)
                                    }
                                </small>
                        }
                    </div>

                    <div className='col-12 mb-4'>
                        {
                            /*
                            <ProdutoItemRadio 
                                obrigatorio
                                titulo="Escolha a borda"
                            />
                            <ProdutoItemCheckbox 
                                titulo="Turbine sua pizza"
                            />
                            */
                        }
                    </div>
                </div>


                <div className='row'>
                    <div className='col-12 mt-3 d-flex justify-content-end'>

                        <div className='d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap gap-2'>
                            <button className='btn btn-outline-danger'><i className="fa-solid fa-minus"></i></button>
                            <span className='m-2 button-qtd'>03</span>
                            <button className='btn btn-outline-danger '><i className="fa-solid fa-plus"></i></button>
                            <button className='btn btn-danger ms-4'>Adicionar a sacola (R$ 50,00)</button>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>

    );
};


export default ProdutoModal;