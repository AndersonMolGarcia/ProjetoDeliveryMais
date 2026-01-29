import { Dock } from 'react-dock';
import './style.css';
import Produto from '../produto/sacola';
import { useContext, useEffect, useState } from 'react';
import { CartContext, CartProvider } from '../../contexts/cart';



function Sidebar(props) {

    const [show, setShow] = useState(false);
    const { cart, setCart, subTotalCart, descontoCart, entregaCart, totalCart } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('openSidebar', () => {
            setShow(true);
        });
    }, []);


    function ClickRemover(id_car) {
        const novoCart = cart.filter((item, index, array) => {
            return item.id_carrinho != id_car;
        })
        setCart(novoCart);
    }

    return (
        <Dock
            position='right'
            isVisible={show}
            onVisibleChange={(visible) => {
                setShow(visible)
            }}
        >
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
                                onClickRemover={ClickRemover}
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
                            />
                            <button className='btn btn-outline-success' type='button' id='button-addon2'>Aplicar</button>
                        </div>

                        <div className='input-group justify-content-end'>
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

                    <button className='btn btn-danger rounded-0 align-itens-center btn-pedido'>Finalizar Pedido</button>
                </div>
            </div>
        </Dock>
    );
};


export default Sidebar;