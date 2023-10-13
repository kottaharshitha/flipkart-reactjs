import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Product() {
    const [products,setProducts]=useState([{Object}])
    useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res => setProducts(res.data.products))
    },0)
    console.log(products);
  return(
<>
<div className='run mb-3' style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}}>
{
    products.map((e,i)=>{
        return(
            <>
            <div className="run1"style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src={e.thumbnail} style={{width:"200px",height:"200px"}}>
            </img>
            <h5>{e.title}</h5>
            <h5>{e.brand}</h5>
            <h5>{e.price}</h5>
            </div>
            </>
        );
    })  

}
</div>
</>
  );
  
}