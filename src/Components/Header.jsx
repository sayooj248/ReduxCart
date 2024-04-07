import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  Badge from 'react-bootstrap/Badge';
import { useSelector ,useDispatch} from 'react-redux';
import { NavLink } from 'react-bootstrap';
import { searchproduct } from '../Redux/Slice';
function Header() {
    const {wishlist} =useSelector(state=>state.WishlistReducer)
    const cart =useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >
                    <Link to={'/'} className='text-decoration-none text-dark' />
                    <i className='fa-solid fa-cart-shopping ' style={{ color: '#000000' }}></i>
                    Reduxcart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                    <Nav.Link>
                        <input type="text"  onChange={(e)=>{dispatch(searchproduct(e.target.value.toLowerCase()))}} placeholder='Enter Product Name'/>
                    </Nav.Link>
                          
                        <Nav.Link  className='btn border border-dark me-3'>
                            <Link to={'/wish'} className='text-decoration-none text-dark'>
                            <i className='fa-solid fa-heart me-1' style={{ color: '#f604c2' }}></i>
                            Wishlist
                            <Badge bg='info' className='ms-1'>{wishlist?.length}</Badge>
                            </Link>
                        </Nav.Link>
                       
                        <Nav.Link className='btn border border-dark'>
                        <Link to={'/cart'}>
                            <i className='fa-solid fa-cart-shopping me-1' style={{ color: '#f00' }}></i>
                            Cart
                            <Badge bg='warning' className='ms-1'>{cart?.length}</Badge>
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header