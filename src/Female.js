import React from 'react'
import './Female.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from './feature/cartSlice'

export default function Female() {

    const items2 = useSelector((state) => state.product2.items2)
    const dispatch=useDispatch()

    return (
        <>
        

            <section>
                <div className='women-heading'>
                    <h3>Women's</h3>
                </div>
            </section>
            <section>
                <div className='product-area'>
                    <div className='container bbv'>
                        <div className='row'>
                            {
                                items2.map((item)=>(
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                    <div className='product-box'>
                                    <div className='card-img'>
                                    <img className='card-img' src={item.image}></img>
                                    </div>
                                        <div className='card-body'>
                                            <h4>{item.title}.</h4>
                                            <p>{item.txt}</p>
                                            <h5>${item.price}.00</h5>
                                        </div>
                                        <div className='button-1'>
                                        <button type='button' class="atttocart-btn"  onClick={()=>dispatch(addTocart(item))}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                          
                            {/* <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-4.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-6.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-7.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-8.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-9.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card-10.webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ff'>
                                <div className='product-box'>
                                    <div className='card-img'>
                                        <img src='images/card(2)-4 (1).webp'></img>
                                    </div>
                                    <div className='card-body'>
                                        <h4>ZARA</h4>
                                        <p>Casual wear attire or clothing...</p>
                                        <h5>$49.00</h5>
                                    </div>
                                    <div className='button-1'>
                                        <button type='button' class="atttocart-btn">ADD TO Cart</button>
                                    </div>
                                </div>
                            </div> */}
                         
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
