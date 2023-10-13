import React from'react';

import Topoffers from '../images/Topoffers.png'
import Mobile from '../images/Mobile.png'
import Electronics from '../images/Electronics.png'
import Tv from '../images/Tv.png'
import Fashion from '../images/Fash.png'
import Beauty from '../images/Beauty.png'
import Home from '../images/homek.png'
import Furniture from '../images/Furniture.png'
import Flights from '../images/Flights.png'
import Grocery from '../images/Grocery.png'

function Menu(){
    return(
        <>
        <div className='row mt-2 '>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={Topoffers}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 mt-3'>
            <img src={Mobile}/>  
            <pre> Mobile </pre>
        </div>
        <div className='col-md-1 '>
            <img src={Electronics}/>  
            <pre> Electronics</pre> 
        </div>
        <div className='col-md-1'>
            <img src={Tv}/>  
            <pre>  TVs App</pre> 
        </div>
        <div className='col-md-1 '>
        <img src={Fashion}/>  
            <pre>  Fashion</pre> 
        </div>
        <div className='col-md-1 '>
        <img src={Beauty}/>  
            <pre>  Beauty</pre> 
        </div>
        <div className='col-md-1'>
        <img src={Home}/>  
            <p>Home&Kitchin</p> 
        </div>
        <div className='col-md-1 '>
        <img src={Furniture}/>  
            <pre> Furniture</pre> 
        </div>
        <div className='col-md-1'>
        <img src={Flights}/>  
            <pre>  Flights</pre> 
        </div>
        <div className='col-md-1 '>
        <img src={Grocery}/>  
            <pre>  Grocery</pre> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;