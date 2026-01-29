import { createContext, useEffect, useState } from "react";



const CartContext = createContext({});





function CartProvider(props) {    

    const [cart, setCart] = useState([]);
    const [subTotalCart, setSubTotalCart] = useState(0);
    const [descontoCart, setDescontoCart] = useState(0);
    const [entregaCart, setEntregaCart] = useState(0);
    const [idCupomCart, setIdCupomCart] = useState(0);
    const [totalCart, setTotalCart] = useState(0);
    const [idEstabelecimentoCart, setIdEstabelecimentoCart] = useState(0);

    function AddItemCart(item) {
        setCart([...cart, item]);
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
                AddItemCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };