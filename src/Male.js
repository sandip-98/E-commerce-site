import React from 'react'
import './Male.css'
import Header from './Header'
import Main from './Home'
import { addTocart } from './feature/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Male() {

    const items = useSelector((state) => state.product.items)
    const dispatch=useDispatch()
    return (
        <>

            <section>
                <div className='men-heading'>
                    <h3>Men's</h3>
                </div>
            </section>
            <section>
                <div className='product-area'>
                    <div className='container bbv'>
                        <div className='row'>
                            {
                                items.map((item) => (
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                        <div className='product-box'>
                                            <div className='card-img'>
                                            <img className='card-imgs' src={item.image}></img>
                                            </div>
                                            <div className='card-body'>
                                                <h4>{item.title}</h4>
                                                <p>{item.txt}</p>
                                                <h5>${item.price}.00</h5>
                                            </div>
                                            <div className='button-1'>
                                                <button type='button' class="atttocart-btn"  onClick={()=>dispatch(addTocart(item))}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-2.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-3.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-4.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-5.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-6.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-7.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    // <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ss'>
                                    //     <div className='product-box'>
                                    //         <div className='card-img'>
                                    //             <img src='images/men-8.webp'></img>
                                    //         </div>
                                    //         <div className='card-body'>
                                    //             <h4>ZARA</h4>
                                    //             <p>Casual wear attire or clothing...</p>
                                    //             <h5>$49.00</h5>
                                    //         </div>
                                    //         <div className='button-1'>
                                    //             <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    //         </div>
                                    //     </div>

                                    // </div>
                                ))}
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
