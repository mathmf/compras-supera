import React , { useContext } from 'react'
import Header from '../components/Header';
import SortDropdown from '../components/SortDropdown';
import ProductsDeck from '../components/ProductsDeck';
import {ProductsContext} from '../context/ProductsContext';

const Shop = () => {
	
	const {setGames, games} = useContext(ProductsContext);
	if(games.length == 0){
		console.log("oi");
		fetch('data/products.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
         }).then(
				function(res){
				return res.json()
			  }).then(function(data){
				console.log(data);
				setGames(data);
			  }).catch(
				function(err){
				  console.log(err, ' error')
				}
			  )
		console.log(games);
	}
	else{
		console.log(games.length);
	}
	return(
	<div>
	<Header/>
	<h1>Loja</h1>
	{typeof games == 'undefined' &&
	<h1>Carregando Loja</h1>}
	{typeof games !== 'undefined' && games.length > 0  &&
	<SortDropdown/>
	}
	{typeof games !== 'undefined' && games.length > 0 &&
	<ProductsDeck/>
	}
	</div>
	
	)
	
}

export default Shop