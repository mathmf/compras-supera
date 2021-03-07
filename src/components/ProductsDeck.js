import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';
import ProductCard from './ProductCard';
import './ProductsDeck.css';


const ProductsDeck = () => {
	
	const {games} = useContext(ProductsContext);
	
	
	
	return (
	<div className="container">
		<div className="row">
		{
				games.map(game =>(
					<div className="col-sm-4">
						<ProductCard key={game.id} game={game}/>
					</div >
				))		
		}			
		</div >
	</div >	
	)
	
	
	
}

export default ProductsDeck;