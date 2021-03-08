import React, {useCallback}  from 'react'
import {useHistory} from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg';

const Header = () => {
	
	
	const history = useHistory();
	
	return(

	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
		<a className="navbar-brand " style={{color:"#fff"}}>Navbar</a>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav me-auto ">
				<li className="nav-item active">
					<a className="nav-link active" href="javascript:void(0)" aria-current="page" onClick={() => history.push('/') }>Home</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link active" href="javascript:void(0)" aria-current="page" onClick={() => history.push('/shop') }>Shop</a>
				</li>
			</ul>			
		</div>
		<a className="navbar-brand" href="javascript:void(0)" onClick={() => history.push('/cart')}>
		<img src={CartIcon} alt="" width="30" height="24"/>
		</a>
			
		
	</nav>
	
	)
	
	
	
}

export default Header