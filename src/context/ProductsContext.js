import React, { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import Products from '../data/products.json';

export const ProductsContext = createContext()



  
const initialState = { games: [...Products]};

const ProductsContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(ProductsReducer,initialState);
	
	const sortByPrice = payload => {
        dispatch({type: 'SORT_BY_PRICE', payload})
    }
	const sortByScore =  payload => {
        dispatch({type: 'SORT_BY_SCORE', payload})
    }
	const sortByName = payload => {
        dispatch({type: 'SORT_BY_NAME', payload})
    }
	
	const contextValues = {
        sortByPrice,
        sortByScore,
        sortByName,
        ...state
    } 

    return ( 
        <ProductsContext.Provider value={contextValues} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;