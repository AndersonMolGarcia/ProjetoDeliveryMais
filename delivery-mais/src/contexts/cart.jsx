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




    function SalvarCart(produtos) {

        if (produtos.length > 0) {
            localStorage.setItem('sessionCart', JSON.stringify({
                cupom: cupomCart,
                id_cupom: idCupomCart,
                id_estabelecimento: idEstabelecimentoCart,
                entrega: entregaCart,
                itens: produtos
            }));
        }else {
            localStorage.removeItem('sessionCart');
        }
    }


    function AddItemCart(item) {
        setCart([...cart, item]);
        SalvarCart([...cart, item]); // salvando no localStorage
    }

    function RemoveItemCart(id_car) {
        const novoCart = cart.filter((item, index, array) => {
            return item.id_carrinho != id_car;
        })
        setCart(novoCart);
        SalvarCart(novoCart);
    }

    function ValidarCupom() {
        setMsgCart("");
        SalvarCart(cart);

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
        //Recuperando informações do carrinho caso haja dados armazenados no localstorage. Toda vez que entrar na pagina verifica...
        const dados = localStorage.getItem('sessionCart');

        if (dados) {
            setCart(JSON.parse(dados).itens);
            setCupomCart(JSON.parse(dados).cupom);
            setIdEstabelecimentoCart(JSON.parse(dados).id_estabelecimento);
            setEntregaCart(JSON.parse(dados).entrega);
            setIdCupomCart(JSON.parse(dados).id_cupom);

        }
    }, []);


    useEffect(() => {
        let soma = cart.reduce((a, b) => a + (b.vl_unit * b.qtd), 0);

        setSubTotalCart(soma);
        setTotalCart((subTotalCart - descontoCart) + entregaCart);
        setTotalCart((subTotalCart - descontoCart) + entregaCart);



    }, [cart]);

    useEffect(() => {
        setTotalCart((subTotalCart - descontoCart) + entregaCart);
    }, [subTotalCart, descontoCart, entregaCart]);

    useEffect(() => {
        if (cupomCart.length > 0) {
            ValidarCupom();
        }
    }, [subTotalCart]);

    useEffect(() => { setMsgCart('') }, [cupomCart]);




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