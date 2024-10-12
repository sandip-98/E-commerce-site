import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from 'react-redux';
import { deCart, deleteCart, inCart } from '../feature/cartSlice';

import Header from '../Header';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart } = useSelector((state) => state.cartItem);
    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <section className="h-100 gradient-custom" style={{ margin: "50px 0px" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                        <MDBCol md="8">
                            <MDBCard className="mb-4">
                                <MDBCardHeader className="py">
                                    <MDBTypography tag="h5" className="mb-2 " color='black'  >
                                  Total Products:-{cart.length}
                                    </MDBTypography>
                                </MDBCardHeader>


                                {
                                    cart?.map((data) => (
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                    <MDBRipple rippleTag="div" rippleColor="light"
                                                        className="bg-image rounded hover-zoom hover-overlay" alt='img'>
                                                        <img width={150}
                                                            src={data.image}
                                                             />

                                                        <a href="#!">
                                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                            </div>
                                                        </a>
                                                    </MDBRipple>
                                                </MDBCol>

                                                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                    <p style={{ margin: "13px 0px" }}>
                                                        <strong>{data.title}</strong>
                                                    </p>
                                                    <h6>{data.txt}</h6>
                                                    <strong>
                                                        <p style={{ margin: "15px 0px 15px 0px" }}>${data.price}.00</p>
                                                    </strong>

                                                    <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                        title="Remove item">
                                                        <MDBIcon fas icon="trash"  onClick={() => dispatch(deleteCart(data.id))} />
                                                    </MDBTooltip>

                                                </MDBCol>

                                                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0" >
                                                    <div className="d-flex mb-4" style={{ maxWidth: "300" }} >
                                                        <MDBBtn className="px-3 me-2" onClick={() => dispatch(deCart(data))}>
                                                            <MDBIcon fas icon="minus" />
                                                        </MDBBtn>
                                                        
                                                        <strong>  {data.quantity}</strong>
                                                        <MDBBtn className="px-3 ms-2" style={{ maxWidth: "500" }} onClick={() => dispatch(inCart((data)))}>
                                                            <MDBIcon fas icon="plus" />
                                                        </MDBBtn>
                                                    </div>

                                                    <p className="text-start text-md-center" style={{ marginRight: "80px" }}>
                                                        <strong>${data.price * data.quantity}</strong>
                                                    </p>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow>


                                            </MDBRow>
                                        </MDBCardBody>
                                    ))

                                }
                            </MDBCard>



                        </MDBCol>
                        <MDBCol md="4" >
                            <MDBCard className="mb-4">
                                <MDBCardHeader>
                                    <MDBTypography tag="h5" className="mb-0">
                                        ORDER SUMMARY
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBListGroup flush>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            <MDBTypography tag="h6" className="mb-2">
                                                <strong> Total Quantity</strong>
                                            </MDBTypography>
                                            <span><strong>{cart.reduce((acc, data) => data.quantity + acc, 0)}</strong></span>
                                        </MDBListGroupItem>

                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                            <MDBTypography tag="h6" className="mb-0">
                                            <strong> Total Amount</strong>
                                            </MDBTypography>
                                            <span style={{color:""}}><strong tag="h5">${cart.reduce((acc, data) => data.price * data.quantity + acc, 0)}.00</strong>  </span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">

                                        </MDBListGroupItem>
                                    </MDBListGroup>

                                    <MDBBtn block size="lg">
                                        <Link to="/">
                                       <p style={{color:"white"}}> Go to Homepage</p>
                                        </Link>
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </>
    )
}
