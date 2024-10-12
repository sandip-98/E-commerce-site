import React from 'react'
import './Home.css'
import Header from './Header';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/src/owl.theme.default.css'
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Female from './Female';
import Male from './Male';
import News from './News';
import Footer from './Footer';
import About from './About';


export default function Main() {
  const options1 = {
    items: 3,
    nav: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav:false,
    responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      768: {
          items: 2
      },
      992: {
          items: 2
      },

      1000: {
          items: 3
      }
  }
    

  };
  const options2 = {
    items: 4,
    nav: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 2000,

  };
  return (
    <>
      <Header />

      <section className='slider-area'>
        <a href='#'>

            <Row>
              <Carousel>
                <Carousel.Item interval={1500}>
                  <img src='/images/banner-1.webp'></img>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img src='/images/banner-2.webp'></img>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img src='/images/banner-3.webp'></img>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
 
        </a>

      </section>
      <section>
        <div className='middle-area'>
          <div className='container-fluid'>
            <div className='row'>
              <div className=' col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12'>
                <a href='#'>
                  <div className='middle-img'>
                    <img src='/images/middle-banner-1.webp' alt='error'></img>

                  </div>
                </a>
              </div>

              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                <div className='middle-slider'>
                  <a href='#'>
                    <Carousel>
                      <Carousel.Item interval={2000}>
                        <img src='/images/4.jpg'></img>
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                        <img src='/images/2.jpg'></img>
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                        <img src='/images/1.jpg'></img>
                        <Carousel.Caption>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='first-carousal'>
          <OwlCarousel options={options1}  >
            <div><img src="/images/carousel(1)-1.webp" alt="The Last of us" /></div>
            <div><img src="/images/carousel(1)-2.webp" alt="GTA V" /></div>
            <div><img src="/images/carousel(1)-3.webp" alt="Mirror Edge" /></div>
            <div><img src="/images/carousel(1)-1.webp" alt="The Last of us" /></div>
            <div><img src="/images/carousel(1)-2.webp" alt="GTA V" /></div>
            <div><img src="/images/carousel(1)-3.webp" alt="Mirror Edge" /></div>
            <div><img src="/images/carousel(1)-1.webp" alt="The Last of us" /></div>
            <div><img src="/images/carousel(1)-2.webp" alt="GTA V" /></div>
            <div><img src="/images/carousel(1)-3.webp" alt="Mirror Edge" /></div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className='categories-text'>
          <h3>Shop by Categories</h3>
        </div>
      </section>

      <Male />
      <Female />
      <div className='border-line'></div>
      <News />
      <section>
        <div className='style-area'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 '>
                <div className='style-box'>
                  <img src='images/style-1.webp'></img>
                  <h3>New Spring Knits</h3>
                  <p>Endleslly verstile new style that say yes to spring. the
                    season's looking bright</p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 summer-nite '>
                <div className='style-box'>
                  <h3>New Spring Knits</h3>
                  <p>Endleslly verstile new style that say yes to spring. the
                    season's looking bright</p>
                  <img src='images/style-2.webp'></img>

                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 winter-nites'>
                <div className='style-box'>
                  <img src='images/style-3.webp'></img>
                  <h3>New Spring Knits</h3>
                  <p>Endleslly verstile new style that say yes to spring. the
                    season's looking bright</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='benefit-area'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ffv'>
                <div className='benefit-box'>
                  <i class="fa-solid fa-piggy-bank" ></i>
                  <h5>Savings</h5>
                  <p>If you don’t make your membership fee in savings,
                    we’ll refund the difference</p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ffv'>
                <div className='benefit-box'>
                  <i class="fa-solid fa-mobile-screen ffa" ></i>
                  <h5>GTry it risk-free</h5>
                  <p>If you don’t make your membership fee in savings,
                    we’ll refund the difference</p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ffv'>
                <div className='benefit-box'>
                  <i class="fa-solid fa-truck"></i>
                  <h5>Fast Delivery</h5>
                  <p>If you don’t make your membership fee in savings,
                    we’ll refund the difference</p>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 ffv'>
                <div className='benefit-box'>
                  <i class="fa-solid fa-shirt ffa"></i>
                  <h5>1000+ products</h5>
                  <p>If you don’t make your membership fee in savings,
                    we’ll refund the difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About/>
      </section>
  
      
    
    </>
  )
}
