import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Basket from './components/Basket';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Orders from './components/Orders';
import "@stripe/stripe-js"

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Orders' element={<Orders/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='Basket' element={<Basket rating={5}/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
