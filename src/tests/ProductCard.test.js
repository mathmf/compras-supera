import React , { useContext } from 'react'
import ProductsContextProvider,{ProductsContext} from '../context/ProductsContext';
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
				<ProductCard key={game.id} game={game}/>
			</ProductsContextProvider>
        ), container);
    });
	expect(screen.getByText("Super Mario Odyssey"));
	expect(screen.getByText(/Adicionar ao Carrinho/).textContent).toMatch("Adicionar ao Carrinho");
	const button = container.querySelector('button');
	act(() => {    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));  });
	expect(screen.getByText(/Adicionar Outro/));
	
	
});