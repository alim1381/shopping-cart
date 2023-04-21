import './App.css';
import Store from './components/Store';
import ProductsContextProvider from './context/Products.context.provider';

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
