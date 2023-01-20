import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import getData from "../api";

const StateContext = createContext()

const StateContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [search, setSearch] = useState("");

    const initialState = {
        products:[],
        cart:[],

    }
    const reducer = (state, action) => {
        switch(action.type) {
            case "get_product":
                return {...state, products: action.payload};
            case "add_to_cart":
                const item = action.payload;
                const isExisted = state.cart.find((c) => c.id === item.id  )
                if(isExisted){
                    return {...state, cart:state.cart.map((c) => c.id === item.id ? item: c)}
                }else{
                    return {...state, cart:[...state.cart, item]}
                }
                // return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
            case "remove_from_cart":
                return {...state, cart:state.cart.filter(item => item.id !== action.payload.id)}
            
            case "empty_cart":
                return {...state, cart:[]} 
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async () => {
        const data = await getData(`/products`)
        setProductList(data)
        
    }
    // console.log(productList);
    // console.log(state.products);
    
    useEffect(()=> {
        getProducts()
    },[])

    useEffect(() => {
        dispatch({type:"get_product", payload:productList})
        const filterProduct = productList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        dispatch({type:"get_product", payload:filterProduct})
    },[productList, search])
    
    const data = {state, search, setSearch, dispatch}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
export default StateContextProvider