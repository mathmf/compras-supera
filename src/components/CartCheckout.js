import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';

const CartCheckout = () => {

	const {cart, count, total} = useContext(ProductsContext);

	return(
		<div className="d-inline-flex justify-content-center" >
			<div className = "card" style={{ width: "300px"}}>
				<h5 className="card-header text-center" >Checkout</h5>
					<div className="card-body">
						<p className="mb-3"> Subtotal : {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
						
						{
							total >= 250 &&
							<h4 className=" mb-3 txt-right">Frete : Grátis</h4>
						}
						{
							total < 250  &&
							<h4 className=" mb-3 txt-right">Frete : {(count*10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
						}
						{
							total >= 250 &&
							<h4 className=" mb-3 txt-right">Total : {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
						}
						{
							total < 250  &&
							<h4 className=" mb-3 txt-right">Total : {(total+count*10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
						}
						<button type="button" className="mt-auto  btn btn-lg  btn-primary"
						> Comprar </button>
				</div>
			</div>
		</div>
	
	)

}

export default CartCheckout	