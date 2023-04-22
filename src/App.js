import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Store from './components/Store';
import ProductsContextProvider from './context/Products.context.provider';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Store />} />
        <Route path='/*' element={<Navigate to='/products' />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
