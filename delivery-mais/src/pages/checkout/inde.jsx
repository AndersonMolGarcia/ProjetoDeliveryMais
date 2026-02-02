import './style.css';
import Navbar from '../../components/navbar';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import Produto from '../../components/produto/sacola';
import api from '../../services/api';



function Checkout(props) {

    const { cart, subTotalCart, descontoCart, cupomCart, entregaCart, totalCart } = useContext(CartContext);
    const [enderecos, setEnderecos] = useState([]);


    useEffect(() => {
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

        console.log('CodCidade: '+localStorage.getItem('sessionCodCidade'))
       // console.log('Endereco: ' + enderecos);
    }, []);

    function FinalizarPedido(props) {

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

                <div>
                    <button onClick={FinalizarPedido} className='btn btn-danger rounded-0 align-itens-center btn-pedido'>Finalizar Pedido</button>
                </div>


            </div>



        </div>
    );

};


export default Checkout;