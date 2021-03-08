import React, {useCallback}  from 'react'
import {useHistory} from 'react-router-dom';

const Header = () => {
	
	
	const history = useHistory();
	
	return(

	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
		<a className="navbar-brand " style={{color:"#fff"}}>Navbar</a>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav me-auto ">
				<li className="nav-item active">
					<a className="nav-link active" href="javascript:void(0)" aria-current="page" onClick={() => history.push('/') }>Inicio</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link active" href="javascript:void(0)" aria-current="page" onClick={() => history.push('/shop') }>Loja</a>
				</li>
			</ul>			
		</div>
		<a className="navbar-brand" href="javascript:void(0)" onClick={() => history.push('/cart')}>
		<img src={`${process.env.PUBLIC_URL}/assets/images/cart-icon.svg`} alt="" width="30" height="24"/>
		</a>
			
		
	</nav>
	
	)
	
	
	
}

export default Header