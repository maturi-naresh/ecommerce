import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, increment, decrement } from '../Store/Slice'
import Navbar from '../Navbar'

function Cart() {
    const cartData = useSelector((state) => state.productData)
    const dispatch = useDispatch()
    // const cartItems = useSelector((state) => state.user);
    return (
        <>
            <Navbar />
            {
                cartData.map((product) => {
                    return (

                        <div style={{ marginTop: '95px' }} className="container ">
                            <div className="row d-flex gap-4 justify-content-around">
                                <div className='border shadow p-3 mb-5 bg-body-tertiary rounded' class="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <img src={product?.image} className="card-img-top w-50 h-50" alt="..." />
                                        <h5 className="card-title">{product?.title.slice(0, 30)}</h5>
                                        <p className="card-text text-success">{product?.description.slice(0, 59)}</p>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <h6><span className='text-primary'>Price</span> : ${product.price * product.quantity}</h6>
                                        <h6><span className='text-primary'>Rating</span> : {product?.rating.rate}</h6>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <div className='mt-1'>
                                            <button className='me-1 bg-warning border' disabled={product.quantity < 2 ? true : false} onClick={() => dispatch(decrement({ id: product.id }))}>-</button>
                                            <b className='me-1'>{product.quantity}</b>
                                            <button className='bg-warning border' onClick={() => dispatch(increment({ id: product.id }))}>+</button>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger mb-4" onClick={() => dispatch(removeProduct({ id: product.id }))}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <h3>total price: ${cartData.reduce((acc, val) => {
                    return acc + val.price * val.quantity
                },0)}</h3>
            </div>
        </>
    )
}

export default Cart
