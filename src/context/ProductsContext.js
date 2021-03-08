import React, { createContext, useReducer } from 'react';
import ProductsReducer from './ProductsReducer';

export const ProductsContext = createContext()




const initialState = { games: [], cart :[],count: 0, total : 0};

const ProductsContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(ProductsReducer,initialState);
	
	const setGames = payload =>{
		dispatch({type: 'SET_GAMES', payload})
	}
	const sortByPrice = payload => {
        dispatch({type: 'SORT_BY_PRICE', payload})
    }
	const sortByScore =  payload => {
        dispatch({type: 'SORT_BY_SCORE', payload})
    }
	const sortByName = payload => {
        dispatch({type: 'SORT_BY_NAME', payload})
    }
	const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }
    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }
    const addItem = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }
    const removeItem = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }
	
	const contextValues = {
        setGames,
		sortByPrice,
        sortByScore,
        sortByName,
		increase,
		decrease,
		addItem,
		removeItem,
        ...state
    } 

    return ( 
        <ProductsContext.Provider value={contextValues} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;