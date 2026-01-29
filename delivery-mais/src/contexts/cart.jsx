import { createContext, useState } from "react";



const CartContext = createContext({});





function CartProvider(props) {

    const item = [{
        id_carrinho: 1001,
        id_produto: 222,
        nome: "Pizza x",
        qtd: 2,
        vl_unit: 45,
        url_foto:"https://static-images.ifood.com.br/image/upload/t_medium/pratos/cd1b9efa-c98d-4d0f-8c1a-0595beac2594/202108111938_3QAO_i.jpg",
        detalhes: [

        ]
    },
    {
        id_carrinho: 1002,
        id_produto: 667,
        nome: "Chease Burguer Duplo",
        qtd: 3,
        vl_unit: 10.50,
        url_foto:"https://static-images.ifood.com.br/image/upload/t_medium/pratos/cd1b9efa-c98d-4d0f-8c1a-0595beac2594/202108111938_3QAO_i.jpg",
        detalhes: [

        ]
    }
]

    const [cart, setCart] = useState(item);

    return <CartContext.Provider value={{cart, setCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};