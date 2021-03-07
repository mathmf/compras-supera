import React  from 'react'

const ProductCard = ({game}) => {
	
	
	return(
	
	<div className="card" style={{ width: "300px"}}>
		<img className="card-img-top img-fluid" style={{display: "block", margin: "0 auto 10px", maxHeight: "200px", maxWidth: "200px"}}
		src={`${process.env.PUBLIC_URL}/assets/images/` + game.image} />
		<div className="card-body d-flex flex-column">
			<h4 className="card-title">{game.name}</h4>
			
			<h4 className="card-title">{game.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
			
			<p className="card-text"><small >{"nota :" + game.score}</small></p>
			<button type="button" className="mt-auto  btn btn-lg btn-block btn-primary">Adicionar ao Carrinho </button>
		</div>            
    </div>
	
	
	
	)
	
	
}

export default ProductCard;