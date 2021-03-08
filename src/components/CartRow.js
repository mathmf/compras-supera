import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';

const CartRow = ({game}) => {
	
	const {increase, decrease, removeItem } =  useContext(ProductsContext);
	
	return(
	<tr>
		<td>
			<img
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={`${process.env.PUBLIC_URL}/assets/images/` + game.image} 
				className="img-fluid d-block"/>
		</td>
		<td>{game.name}</td>
		<td>{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
		<td>
			<button 
                onClick={() => increase(game)}
                className="btn btn-primary btn-sm mr-2 mb-1"
				style={{ width: "30px"}}>
                    +
            </button>
			
			{game.quantity}
			
			{
				 game.quantity > 1 &&
				 <button
				onClick={() => decrease(game)}
				className="btn btn-danger btn-sm mb-1"
				style={{ width: "30px", marginLeft: "10px"}}>
					-
				</button>
			}

			{
				 game.quantity === 1 &&
				 <button
				onClick={() => removeItem(game)}
				className="btn btn-danger btn-sm mb-1"
				style={{ width: "30px" ,marginLeft: "10px"}}>
					-
				</button>
			}
		</td>
		<td>{(game.quantity * game.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
	</tr>
	)
	
}

export default CartRow;
