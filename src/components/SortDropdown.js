import React , { useContext } from 'react'
import {ProductsContext} from '../context/ProductsContext';

const SortDropdown = () => {
	
	
	const { sortByPrice, sortByScore, sortByName } = useContext(ProductsContext);
	
	return(
	<div className="dropdown">
		<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Ordenar por:
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByName({direction: "asc"})}>Nome A-Z</a>
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByName({direction: "desc"})}>Nome Z-A</a>
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByPrice({direction: "asc"})}>Menor Preço</a>
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByPrice({direction: "desc"})}>Maior Preço</a>
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByScore({direction: "desc"})}>Maior Nota</a>
			<a className="dropdown-item" href="javascript:void(0)" onClick={() => sortByScore({direction: "asc"})}>Menor Nota</a>
		</div>
	</div>
	)
	
}

export default SortDropdown