import React from 'react'
import Footer from './Footer'
import './About.css'
import Header from './Header'

export default function About() {
  return (
    <>
    <Header/>
    <section>
        <div className='person-area'>
          <div className='person-box'>
            <h3>Talk To A Real Person</h3>
            <p>Are you on the fence? Have a question? Need a recommendation?<br /> Member Services is always here to help. Send us a message.</p>
            <img className='img-fluid' src='images/support.webp'></img>
            <br />

            <button type='button' class="person-btn">CHAT WITH MEMBER SERVICES <i class="fa-regular fa-comment"></i></button>

          </div>
        </div>
        <Footer />
      </section>
  
    </>
  )
}
