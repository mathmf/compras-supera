import React, {useCallback}  from 'react'
import {useHistory} from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg';

const Header = () => {
	
	
	const history = useHistory();
	
	return(

	<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
		<a className="navbar-brand" href="#">Navbar</a>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav me-auto ">
				<li className="nav-item active">
					<a className="nav-link active" href="#" aria-current="page" onClick={() => history.push('/') }>Home</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link active" href="#" aria-current="page" onClick={() => history.push('/shop') }>Shop</a>
				</li>
			</ul>			
		</div>
		<a className="navbar-brand" href="#" onClick={() => history.push('/cart')}>
		<img src={CartIcon} alt="" width="30" height="24"/>
		</a>
			
		
	</nav>
	
	)
	
	
	
}

export default Header