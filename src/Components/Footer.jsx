import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div>
    <div className='d-flex justify-content-between bg-dark text-light p-5'>
      <div className='w-25'>
        <h3>ReduxCart 2024</h3>
        <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quaerat ducimus doloribus rem eos optio.</p>
      </div>
      <div className='w-25 text-center'>
        <h3>Links</h3>
        <Link to={'/wish'} className='d-block mb-3 mt-3'>Wishlist</Link>
        <Link to={'/cart'}>Cart</Link>
      </div>
      <div className='w-25'>
        <h3>References</h3>
        <a href="">React Bootstrap</a>
        <a href="">React</a>
        <a href="">Redux</a>
      </div>
      <div className='w-25'>
        <h3>Contact Us</h3>
        <p>submit your email, so we can contact you...</p>
        <input type="email" className='form-control' placeholder='Enter Email Id' />
        <button className='btn btn-outline-light mt-3'>Submit</button>
      </div>
      
      </div>
      <div>
        <h6 className='text-center'>ReduxCart 2024 &copy; All rights reserved</h6>
      </div>
   </div>
   </>
  )
}

export default Footer