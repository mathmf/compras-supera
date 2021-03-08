import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';

const CartCheckout = () => {

	const {cart, count, total} = useContext(ProductsContext);

	return(
		<div className="card">
			<h5 className="card-header text-center">Checkout</h5>
				<div className="card-body">
					<p className="mb-1">Subtotal :</p>
                    <h4 className=" mb-3 txt-right">{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
					<p className="mb-1">Frete :</p>
					{
						total >= 250 &&
						<h4 className=" mb-3 txt-right">Grátis</h4>
					}
					{
						total < 250  &&
						<h4 className=" mb-3 txt-right">{(count*10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
					}
					
					<p className="mb-1">Total :</p>
					{
						total >= 250 &&
						<h4 className=" mb-3 txt-right">{total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
					}
					{
						total < 250  &&
						<h4 className=" mb-3 txt-right">{(total+count*10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
					}
					<button type="button" className="mt-auto  btn btn-lg  btn-primary"
					> Comprar </button>
			</div>
		</div>
	
	)

}

export default CartCheckout	