import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    const {setData,filterData,data}=props
    const navigate=useNavigate()
    const[search,setSearch]=useState("")
    const handleSearch=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
        if(filterData){
        let newFilterdData=filterData.filter((val)=>{
            return val.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(newFilterdData,'this is filtered Data')
        setData(newFilterdData)
    }}
    const handlePrice=(price)=>{
        let abc=[...filterData]
        if(price==="Default"){
            // const x=data.sort((a,b)=>{(a.price-b.price)})
            setData(abc)
        }
        else if(price==="LowToHigh"){
            let a=abc.sort((a,b)=>a.price-b.price)
             setData(a)
        }
        else if(price==="HighToLow"){
            let b=abc.sort((a,b)=>b.price-a.price)
            setData(b)
        }
    }
    
    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid bg-info rounded pt-2 pb-2">
                    <a className="navbar-brand" href="#" onClick={()=>{navigate("/")}}><button className="btn btn-primary">Shop Mart</button></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light me-3" aria-current="page" href="#" style={{fontSize:"20px"}} onClick={()=>{navigate("/")}}><button className="btn btn-warning">Home</button></a>
                            </li>
                        </ul>
                        <div className="dropdown me-4">
                            <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Category
                            </button>
                            <ul class="dropdown-menu dropdown-menu  bg-warning">
                                <li><a className="dropdown-item" >All</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Electronics</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Jewelry</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Men</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" >Women</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Price
                            </button>
                            <ul class="dropdown-menu dropdown-menu bg-warning">
                                <li><a className="dropdown-item" onClick={()=>{handlePrice("Default")}}>Default</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" onClick={()=>{handlePrice("LowToHigh")}}>Low-High</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" onClick={()=>{handlePrice("HighToLow")}}>High-Low</a></li>
                            </ul>
                        </div>


                        



                        <input className="form-control me-4 ms-4" type="search" placeholder="search for products" aria-label="Search" 
                        value={search}
                        onChange={(e)=>handleSearch(e)}/>
                        <button className="me-3 ms-2 btn btn-danger" type="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                        <button className="me-1 ms-2 btn btn-warning" type="submit" onClick={()=>{navigate("/Cart")}}><i class="fa-solid fa-cart-plus"></i>Cart</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
