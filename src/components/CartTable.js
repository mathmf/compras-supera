import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';
import CartRow from './CartRow';

const CartTable = () => {
	
	const {cart} = useContext(ProductsContext);
	
	return ( 
        <table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Imagem</th>
					<th scope="col">Nome</th>
					<th scope="col">Preço</th>
					<th scope="col">Quantidade</th>
					<th scope="col">Total</th>
				</tr>
			</thead>
			<tbody>
				{
					cart.map(game =>  <CartRow key={game.id} game={game}/>)
				}
			</tbody>
		</table>
     );
	
}

export default CartTable