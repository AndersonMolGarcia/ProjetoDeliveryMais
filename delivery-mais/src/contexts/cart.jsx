import { createContext, useState } from "react";



const CartContext = createContext({});





function CartProvider(props) {

    const [cart, setCart] = useState([]);
    const [nome, setNome] = useState("Anderson Molina Garcia");

    return <CartContext.Provider value={{cart, setCart, nome, setNome}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};