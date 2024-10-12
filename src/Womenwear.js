import React from 'react'
import "./Womenwear.css"
import Header from './Header'
import Footer from './Footer'
import Female from './Female'

export default function Womenwear() {

  return (
    <>

      <section>
        <Header />

        <div className='women-area'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='logic-title'>
                  <img className='img-fluid' src='/images/Women.png'></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Female />
        <Footer />
      </section>
    </>
  )
}
