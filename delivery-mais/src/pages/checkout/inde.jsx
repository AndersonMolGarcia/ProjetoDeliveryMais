import './style.css';
import Navbar from '../../components/navbar';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import Produto from '../../components/produto/sacola';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';



function Checkout(props) {

    const navigate = useNavigate();

    const { cart, setCart, subTotalCart, descontoCart, cupomCart, entregaCart, totalCart, idEstabelecimentoCart, idCupomCart, setIdCupomCart } = useContext(CartContext);
    const [enderecos, setEnderecos] = useState([]);

    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [codCidade, setCodCidade] = useState('');


    useEffect(() => {

        if (cart.length == 0){
            navigate('/');
            return;
        }

        api.get('/v1/usuarios/enderecos/', {
            params: {
                cod_cidade: JSON.parse(localStorage.getItem('sessionCodCidade'))
            }
        })
            .then(response => {
                console.log('API enderecos: ' + response.data);
                setEnderecos(response.data)
            })
            .catch(err => console.error(err));

        //console.log('CodCidade: ' + localStorage.getItem('sessionCodCidade'))
        // console.log('Endereco: ' + enderecos);
    }, []);

    useEffect(() => {
        if (cart.length == 0){
            navigate('/');
            
        };

    }, [cart]);



    function SelecionarEndereco(end) {
        setEndereco(end.endereco);
        setComplemento(end.complemento);
        setBairro(end.bairro);
        setCidade(end.cidade);
        setUf(end.uf);
        setCep(end.cep);
        setCodCidade(end.cod_cidade);
    }


    function FinalizarPedido() {        

        api.post('/v1/pedidos', {
            "id_estabelecimento": idEstabelecimentoCart,
            "id_cupom": idCupomCart ?? 0,
            "vl_taxa_entrega": entregaCart,
            "vl_desconto": descontoCart,
            "vl_total": totalCart,
            "endereco": endereco,
            "complemento": complemento,
            "bairro": bairro,
            "cidade": cidade,
            "uf": uf,
            "cep": cep,
            "cod_cidade": codCidade,
            itens: cart
        })
        .then(response => {
            if (response.data) {
                sessionStorage.removeItem('sessionCart');
                setCart([]);
                setIdCupomCart(0);
                navigate('/pedidos');
            } else {
                alert('Erro ao enviar o pedido');
            }           
        })
        .catch(err => {
            console.error(err);
            console.log('Erro: ' + err);
        })

            
    }

    return (
        <div className='container-fluid mt-page'>
            <Navbar />

            <div className='row col-lg-6 offset-lg-3'>

                <div>
                    <h2 className='mt-2'>Finalizar Pedido</h2>
                </div>

                <div className='mt-3'>
                    {
                        cart.map(prod => {
                            return <div key={prod.id_carrinho}>
                                <Produto
                                    nome={prod.nome}
                                    valor_total={prod.vl_unit * prod.qtd}
                                    qtd={prod.qtd}
                                    valor_unit={prod.vl_unit}
                                    id_carrinho={prod.id_carrinho}
                                    url_foto={prod.url_foto}
                                />
                            </div>

                        })
                    }
                </div>

                <div className='row align-itens-end mt-5'>
                    <div className='col-12 d-flex justify-content-between align-itens-center '>
                        <span>Subtotal</span>
                        <span>
                            {
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotalCart)
                            }
                        </span>
                    </div>

                    <div className='col-12 d-flex justify-content-between align-itens-center mt-2'>
                        <small>Desconto {descontoCart > 0 ? <span className='text-success'>{`(cupom ${cupomCart})`}</span> : null}</small>
                        <span>
                            -
                            {
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(descontoCart)
                            }
                        </span>


                    </div>

                    <div className='col-12 d-flex justify-content-between align-itens-center mt-2'>
                        <span>Taxa de Entrega</span>
                        <span>
                            {
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(entregaCart)
                            }
                        </span>
                    </div>

                    <div className='col-12 d-flex justify-content-between align-itens-center mt-3'>
                        <b>Total</b>
                        <h3>
                            {
                                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCart)
                            }
                        </h3>
                    </div>


                </div>

                <div className='mt-5 mb-3 '>
                    <h4>Endereço de Entrega</h4>
                </div>

                <div className='row'>
                    <ul className='list-group list-group-flush'>
                        {
                            enderecos.map(end => {
                                return <li className='list-group-item p-3' key={end.id_endereco}>
                                    <input
                                        className='form-check-input '
                                        type="radio"
                                        name='flexRadioDefault'
                                        id={`flexRadioDefault${end.id_endereco}`}
                                        onClick={(e) => SelecionarEndereco(end)}
                                    />
                                    <label className='form-check-label ms-2' htmlFor={`flexRadioDefault${end.id_endereco}`}>
                                        <b>{end.endereco} {end.complemento > 0 ? ` - ${end.complemento}` : null}</b>
                                        <small className='d-block'>{end.cidade?.toUpperCase()} - {end.uf?.toUpperCase()}</small>
                                    </label>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className='row mb-5'>
                    <button
                        onClick={FinalizarPedido}
                        className='btn btn-lg btn-danger mt-4 '
                        disabled={endereco.length == 0 ? true : false}
                    >
                        Finalizar Pedido
                    </button>
                </div>


            </div>



        </div>
    );

};


export default Checkout;