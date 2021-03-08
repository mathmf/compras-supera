import React , { useContext } from 'react'
import Header from '../components/Header';
import CartTable from '../components/CartTable';
import CartCheckout from '../components/CartCheckout';
import {ProductsContext} from '../context/ProductsContext';


const Cart = () => {
	
	const {count} = useContext(ProductsContext);
	
	
	
	return(
	<div>
	<Header/>
	<h1>Carrinho</h1>
	{count === 0 &&
	<h1>Carrinho Vazio</h1>}
	{count > 0 &&
	<CartTable/>
	}
	{count > 0 &&
	<CartCheckout/>}
	</div>
	
	)
	
}

export default Cart