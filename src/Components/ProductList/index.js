import React, { useEffect, useState } from 'react'
import Card from "../Card"
import Navbar from '../Navbar'

function ProductList() {
    const [data, setData] = useState([])
    const[filterData,setFilter]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response)=>response.json())
            .then((dataa)=>{
                setData(dataa)
                setFilter(dataa)
                console.log(dataa)
            })
            .catch((err)=>{
                console.error("error fetching data", err)
            })
    }, [])
    return (
        <>
            <Navbar
             data={data}
            setData={setData}
            filterData={filterData}
            />
            <div style={{marginTop:'95px'}} className="container ">
                <div className="row d-flex gap-4 justify-content-around">
                    {
                        data.map((product,index) => {
                            
                            return (
                                <>
                                    <Card
                                        key={index}
                                        product={product}
                                    
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList




