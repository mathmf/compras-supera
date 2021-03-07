import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cart" component={Cart} />
			<Route path="/shop" component={Shop} />				
			<Route component={Error} />
		</Switch>
	</BrowserRouter>
);

export default Routes