import React from 'react'
import { useEffect } from 'react'
import { Row,Col,Card} from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux'
import { removeFromWishlist } from '../Redux/wishslice'
import { addToCart } from '../Redux/Cartslice'

function Wishlist() {

  const {wishlist}=useSelector((state)=>state.WishlistReducer)
  console.log(wishlist)
  const dispatch=useDispatch()

  const handleaddToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <>
    <div className='p-5 container'>
      <Row>
          {
        wishlist?.length>0?
        wishlist?.map(item=>(
        <Col sm={12} md={6} lg={4} xl={2}>
        <Card>
          <Card.Img src={item?.thumbnail} variant='addimgdoc' height={"108px"} />
          <Card.Body>
            <Card.Title> {item?.title.slice(0,10)}...</Card.Title>
            <Card.Text>{item?.price}</Card.Text>
            <div className='d-flex justify-content-between'>
              <button className='btn border' onClick={()=>{dispatch(removeFromWishlist(item?.id))}}>
              <i className="fa-solid fa-heart-circle-xmark" style={{color: "#dd0303",}} ></i>
              </button>
              <button className='btn border' onClick={()=>handleaddToCart(item)}>
              <i class="fa-solid fa-cart-plus" style={{color:"#B197FC"}}></i>
              </button>
            </div>
          </Card.Body>
        </Card>    
       </Col>
        ))
       :
       <h1>No Wishlist .....</h1>


         }
       
      </Row>

    </div>
    
    </>
  )
}

export default Wishlist