import { createContext, useEffect, useState } from "react";
import api from "../services/api";



const CartContext = createContext({});





function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [subTotalCart, setSubTotalCart] = useState(0);
    const [descontoCart, setDescontoCart] = useState(0);
    const [entregaCart, setEntregaCart] = useState(0);
    const [idCupomCart, setIdCupomCart] = useState(0);
    const [cupomCart, setCupomCart] = useState("");
    const [msgCart, setMsgCart] = useState("");
    const [totalCart, setTotalCart] = useState(0);
    const [idEstabelecimentoCart, setIdEstabelecimentoCart] = useState(0);


    function AddItemCart(item) {
        setCart([...cart, item]);
    }

    function RemoveItemCart(id_car) {
        const novoCart = cart.filter((item, index, array) => {
            return item.id_carrinho != id_car;
        })
        setCart(novoCart);
    }

    function ValidarCupom() {
        setMsgCart("");

        api.get(`v1/cupons/validacao`, {
            params: {
                cod_cupom: cupomCart,
                vl_pedido: Math.trunc(subTotalCart * 100),
                id_estabelecimento: idEstabelecimentoCart
            }
        })
            .then(response => {
                if (response.data) {
                    let porc_cupom = response.data.porc_cupom;
                    let vl_cupom = response.data.vl_cupom;

                    setIdCupomCart(response.data.id_cupom);
                    setDescontoCart(vl_cupom + (subTotalCart * porc_cupom / 100));
                } else {
                    setIdCupomCart(0);
                    setDescontoCart(0);
                    setMsgCart("Cupom inválido");

                }
            })
            .catch(err => {
                setIdCupomCart(0);
                setDescontoCart(0);
                setMsgCart("Cupom inválido");
                console.error(err);
            })

    }


    useEffect(() => {
        let soma = cart.reduce((a, b) => a + (b.vl_unit * b.qtd), 0);

        setSubTotalCart(soma);
        setTotalCart((subTotalCart - descontoCart) + entregaCart);
        setTotalCart((subTotalCart - descontoCart) + entregaCart);



    }, [cart]);

    useEffect(() => {
        setTotalCart((subTotalCart - descontoCart) + entregaCart);
    }, [subTotalCart, descontoCart, entregaCart]);




    return (
        <CartContext.Provider
            value={{
                cart, setCart,
                subTotalCart, setSubTotalCart,
                descontoCart, setDescontoCart,
                entregaCart, setEntregaCart,
                idCupomCart, setIdCupomCart,
                totalCart, setTotalCart,
                idEstabelecimentoCart, setIdEstabelecimentoCart,
                AddItemCart,
                RemoveItemCart,
                ValidarCupom,
                cupomCart, setCupomCart,
                msgCart, setMsgCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };