import React from "react";
import m1 from  '../images/m1.png'
 import m2 from  '../images/m2.png'
 import m3 from  '../images/m3.png'
 import m4 from  '../images/m4.png'
 import m5 from  '../images/m5.png'
 import m6 from  '../images/m6.png'
 import Fan from  '../images/Fan.png'

 function Cards(){
    return(
        <>
        <div className="row mt-4">
              <div className="col-md-10 ">
                   <div className="row">
                     <h2>Best Mobile</h2>
                   </div>
                   <div className="row mt-4">
                        <div className="col-md-2">
                           <img src={m1}/>
                            <p className="mt-3" >Google Pixel 7a<br></br><b>incl of offers</b></p>
                           
                        </div>
                        <div className="col-md-2">
                        <img src={m2}/>
                        <p className="mt-3" >Samsung S22 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={m3}/>
                        <p className="mt-3" >Realme 11 Pro 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={m4}/>
                        <p className="mt-3" >Redmi 12<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={m5}/>
                        <p className="mt-3" >Samsung F34 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={m6}/>
                        <p className="mt-3" >Realme 11X 5g<br></br><b>incl of offers</b></p>
                        </div>
                   </div>
              </div>
              <div className="col-md-2">
              <img src={Fan}/>
              </div>
        </div>
        </>
       
        );
    }
   
    
    export default Cards;
