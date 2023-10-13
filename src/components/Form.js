import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Forms() {
const [id,setId]=useState('');
const [title,setTitle]=useState('');
const [brand,setBrand]=useState('');
const [des,setDes]=useState('');
const [price,setPrice]=useState('');
const [image,setImage]=useState('');
const productData={
    productId:id,
    title:title,
    brand:brand,
    price:price,
    description:des,
    thumbnail:image
}
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3002/products',productData)
    .then((res)=>{
        alert("Success");
    })
}
  return (
    <>
    <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-6" style={{backgroundColor:"#d0d6ef"}}>
                    <form method="post" onSubmit={handleSubmit}>
                    <h2 class="text-center">Add Product</h2><hr></hr>
                    <div class="mb-3">
                        <label>Product Id</label>
                        <input type="text" class="form-control" id="txtname" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label>Product Name</label>
                        <input type="text" class="form-control" id="txtroll" placeholder="Enter Name" onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label>Brand</label>
                        <input type="text" class="form-control" id="txtdob" placeholder="Enter Brand" onChange={(e)=>setBrand(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label>Description</label>
                        <textarea type="number" class="form-control" id="txtmob" placeholder="Enter Description" style={{paddingBottom:"50px"}} onChange={(e)=>setDes(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label>Price</label>
                        <input type="number" class="form-control" id="txtmob" placeholder="Ener Price" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label>Image</label>
                        <input type="text" class="form-control" id="txtmob" placeholder="Enter product url" onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <button className="btn bg-success" style={{paddingLeft:"5px",paddingRight:"10px"}}>Submit</button>
                    </div>
                </form>
               
                </div>
            </div>
        </div>
    </>
  )
}