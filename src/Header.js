import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
    const { cart } = useSelector(state => state.cartItem)

    return (
        <section class="navbar-area">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#"><img src="/images/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='nav-text'>
                            <Nav>
                                <Nav.Link href="#action1">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    <Link to="/Menswear">
                                    Menswear
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action3">
                                    <Link to="/Womenwear">
                                    Womenwear
                                    </Link>
                                </Nav.Link>
                                <Nav.Link href="#action4">
                                <Link to="/about" class="About">
                                        About
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </div>
                        <div className='cart-button-box'>
                            <div class="button-cart">
                              <Link to="/Cart"><i class="fa-solid fa-store"><sup>{cart.length}</sup></i></Link>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
}

