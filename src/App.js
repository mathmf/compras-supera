import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';
import ProductsContextProvider from './context/ProductsContext';

function App() {
  return (
    <div className="App">
		<ProductsContextProvider>
            <Routes/>
        </ProductsContextProvider>
    </div>
  );
}

export default App;
