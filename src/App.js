import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
      <Route path="/" element={<ProductList/>}/>
       <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
