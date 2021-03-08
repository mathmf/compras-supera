import React , { useContext } from 'react'
import ProductsContextProvider,{ProductsContext} from '../context/ProductsContext';
import Cart from '../pages/Cart';
import ProductCard from '../components/ProductCard';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react'

let game = {
			id: 312,
			name: "Super Mario Odyssey",
			price: 197.88,
			score: 100,
			image: "super-mario-odyssey.png"
			}
let container;

beforeEach(() => {
    container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
	container = null;
});			
			

test("with ReactDOM", () => {
    act(() => {
        ReactDOM.render((
            <ProductsContextProvider>
				<Cart/>
				<ProductCard key={game.id} game={game}/>
			</ProductsContextProvider>
        ), container);
    });
	expect(screen.getByText("Carrinho Vazio"));
	const button = container.querySelector('button');
	act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  });
	expect(screen.getByText("Subtotal : R$ 197,88"));
	expect(screen.getByText("Frete : R$ 10,00"));
	expect(screen.getByText("Total : R$ 207,88"));
	const addBtn = screen.queryByText('+');
	act(() => {    addBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));  });
	expect(screen.getByText("Subtotal : R$ 395,76"));
	expect(screen.getByText("Frete : Grátis"));
	expect(screen.getByText("Total : R$ 395,76"));
	
	
});
