
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart';
import { Dock } from 'react-dock';
import './style.css';
import Produto from '../produto/sacola';
import Sacola from '../../assets/bag.png';




function Sidebar(props) {


    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const {
        cart,
        subTotalCart,
        descontoCart,
        entregaCart,
        totalCart,
        RemoveItemCart,
        ValidarCupom,
        cupomCart,
        setCupomCart,
        msgCart
    } = useContext(CartContext);


    useEffect(() => {
        window.addEventListener('openSidebar', () => {
            setShow(true);
        });
    }, []);


    function FinalizarPedido() {
        setShow(false);
        navigate('/checkout');
        
    }




    return (
        <Dock
            position='right'
            isVisible={show}
            fluid={false}
            size={420}
            onVisibleChange={(visible) => {
                setShow(visible)
            }}
        >
            {
                cart.length == 0 ?
                    <div className='d-flex h-100 flex-column justify-content-center align-items-center text-center'>
                        <img src={Sacola} alt="Sacola vazia" />
                        <small className='mt-2 text-secondary'>Sua sacola está vazia</small>
                    </div>
                    :
                    <div className='container-fluid h-100 pt-4 sidebar'>
                        <h5>Minha Sacola</h5>

                        <div className='row produtos'>
                            {
                                cart.map((prod) => {
                                    return <Produto
                                        key={prod.id_carrinho}
                                        nome={prod.nome}
                                        valor_total={prod.vl_unit * prod.qtd}
                                        qtd={prod.qtd}
                                        valor_unit={prod.vl_unit}
                                        id_carrinho={prod.id_carrinho}
                                        url_foto={prod.url_foto}
                                        onClickRemover={RemoveItemCart}
                                        detalhes={prod.detalhes}
                                    />
                                })
                            }
                        </div>

                        <div className='row align-itens-end footer'>
                            <div className='col-12 d-flex justify-content-between align-itens-center'>
                                <span>Subtotal</span>
                                <span>
                                    {
                                        new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subTotalCart)
                                    }
                                </span>
                            </div>

                            <div className='col-12 d-flex justify-content-between align-itens-center mt-2'>
                                <div className='input-group'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder=''
                                        aria-label="Recipient's username"
                                        aria-describedby='button-addon2'
                                        onChange={(e) => setCupomCart(e.target.value)}
                                        value={cupomCart}

                                    />
                                    <button onClick={ValidarCupom} className='btn btn-outline-success' type='button' id='button-addon2'>Aplicar</button>
                                </div>

                                <div className='input-group justify-content-end'>
                                    {
                                        msgCart.length > 0 ?
                                            <small className='text-danger me-3'>{msgCart}</small>
                                        : null
                                    }
                                    <span className='d-inline-block text-success'>
                                        -
                                        {
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(descontoCart)
                                        }
                                    </span>
                                </div>

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

                            <button onClick={FinalizarPedido} className='btn btn-danger rounded-0 align-itens-center btn-pedido'>Finalizar Pedido</button>
                        </div>
                    </div>
            }


        </Dock>
    );
};


export default Sidebar;