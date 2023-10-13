// import logo from './logo.svg';
import './App.css'
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import Slider from './components/Slider.js';
import Form from './components/Form.js'
import Cards from './components/Cards.js';
import Products from  './components/Products.js';
// import { BrowserRouter,Routes,Router } from 'react-router-dom';
import './css/bootstrap.css'

function App() {
  return (
   
   <>
   <div className='container-fluid '>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Slider/>
               
                <Cards/>
                <Products/>
                <Form/>
        </div>
   </div>
   </> 
  );
}

export default App;