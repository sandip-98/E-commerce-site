import React from 'react'
import Male from './Male'
import "./Menswear.css"
import Header from './Header'
import Footer from './Footer'

export default function Menswear() {

    return (
        <>

            <section>
                <Header/>
           
                <div className='men-area'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='logic-title'>
                                    <img className='img-fluid' src='/images/Men.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Male/>
                <Footer/>
            </section>
        </>
    )
}
