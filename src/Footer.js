import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <section>
      
          <div className='footer-area'>
            <div className='footer-box'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='footer-heading'>
                      <h1>Get Expert Tips In Your Inbox</h1>
                      <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                    <div className='footer-mail-box'>
                      <input type='mail' id='footer-input' placeholder='Enter Your Email Here'></input>
                      <button type='button' id='footer-btn' class='btn btn-dark'>SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='services'>
          <div className='services-area'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>Social Media</h5>
                    <ul>
                      <li>
                        <a href='#'>
                          <i class="fa-brands fa-instagram footer-icon"></i>
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i class="fa-brands fa-twitter footer-icon"></i>
                          Twitter
                        </a>
                      </li>

                      <li>
                        <a href='#'>
                          <i class="fa-brands fa-facebook footer-icon"></i>
                          Facebook
                        </a>
                      </li>


                      <li>
                        <a href='#'>
                          <i class="fa-brands fa-youtube footer-icon"></i>
                          YouTube
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>Contact</h5>
                    <ul>
                      <li>Contact Us</li>
                      <li>youremail@email.com</li>
                      <li>example@email.com</li>
                      <li>Call us:+1254568-5479</li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>About</h5>
                    <ul>
                      <li>Customer Support</li>
                      <li>Support Center</li>
                      <li>About Us</li>
                      <li>Copyright</li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>Customer Care</h5>
                    <ul>
                      <li>FAQ & Helps</li>
                      <li>Shipping & Delivery</li>
                      <li>Return & Exchanges</li>
                      <li>Quality & Quantity</li>
                    </ul>
                  </div>
                </div>

                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>Our Information</h5>
                    <ul>
                      <li>Privacy policy update</li>
                      <li>Terms & conditions</li>
                      <li>Return Policy</li>
                      <li>Site Map</li>
                    </ul>
                  </div>
                </div>
                <div className='col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12'>
                  <div className='service-box'>
                    <h5>Top Categories</h5>
                    <ul>
                      <li>Men's Wear</li>
                      <li>Women's Wear</li>
                      <li>Kids's Wear</li>
                      <li>Sports's Wear</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-last'>
            <p>©2023 SmokeyBazar is Powered by MR.Sandip...</p>
          </div>
        </div>
      </section>
    </>
  )
}
