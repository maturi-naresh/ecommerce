import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../Store/Slice'
import { toast } from 'react-toastify'


function Card({product}) {
    // const { image, title, description, price, rating } = product
    const storeData = useSelector((state)=>state.productData)
    const checkIsThere = storeData.find((item)=>item.id===product.id)
    const dispatch = useDispatch()
    return (
        <>
            <div className='border shadow p-3 mb-5 bg-body-tertiary rounded' class="card" style={{ width: "18rem"}}>
                <div className="card-body">
                <img src={product?.image} className="card-img-top w-50 h-50" alt="..." />
                    <h5 className="card-title">{product.title?.slice(0, 30)}</h5>
                    <p className="card-text text-success">{product.description?.slice(0, 59)}</p>
                </div>
                <div className="d-flex justify-content-around">
                    <h6 class="styling"><span className='text-info'>Price</span> : ${product?.price}</h6>
                    <h6><span className='text-info'>Rating</span> : {product.rating?.rate}</h6>
                </div>
                <div class="card-body">
                    {
                        checkIsThere?<button className='btn btn-warning bg-danger text-light' onClick={()=> dispatch(removeProduct({id:product.id}))}>Remove</button>
                        : <button className='btn btn-warning' onClick={()=> dispatch(addProduct({...product,quantity:1}))}>Add To Cart</button>
                    }
                   
                </div>
            </div>
        </>
    )
}

export default Card
