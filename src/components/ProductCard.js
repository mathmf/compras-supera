import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';

const ProductCard = ({game}) => {
	
	const {addItem , cart , increase} = useContext(ProductsContext);
	
	const isInCart = game => {
        return !!cart.find(item => item.id === game.id);
    }
	
	return(
	
	<div className="card" style={{ width: "300px"}}>
		<img className="card-img-top img-fluid" style={{display: "block", margin: "0 auto 10px", maxHeight: "200px", maxWidth: "200px"}}
		src={`${process.env.PUBLIC_URL}/assets/images/` + game.image} />
		<div className="card-body d-flex flex-column">
			<h4 className="card-title">{game.name}</h4>
			
			<h4 className="card-title">{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
			
			<p className="card-text"><small >{"nota :" + game.score}</small></p>
				
				{
					isInCart(game) && 
					<button type="button" className="mt-auto  btn btn-lg btn-block btn-primary"
					onClick={() => increase(game)}> Adicionar Outro </button>
				}
				
				{
					!isInCart(game) && 
					<button type="button" className="mt-auto  btn btn-lg btn-block btn-primary"
					onClick={() => addItem(game)}> Adicionar ao Carrinho </button>
				}
			
		</div>            
    </div>
	
	
	
	)
	
	
}

export default ProductCard;