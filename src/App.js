import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import {Home} from './Components/Home';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import {Login} from './Components/Register/Login'
import { Signup } from './Components/Register/Signup';


function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
    </Router> 
    </>
  );
}

export default App;
