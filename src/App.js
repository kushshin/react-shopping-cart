import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ProdPage from './Components/ProdPage';
import CartList from './Components/CartList';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/productpage/:productId' element={<ProdPage />} />
          <Route exact path='/cartList' element={<CartList />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
