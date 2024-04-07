import React,{useEffect,useState} from 'react'
import { Row ,Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchProductThank } from '../Redux/Slice'
import { addwishlist } from '../Redux/wishslice'
import { addToCart } from '../Redux/Cartslice'
import { useDispatch } from 'react-redux'


function Details() {

  const [data,setData]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    console.log(id)
    setData(JSON.parse(localStorage.getItem("response")).find(item=>item.id==id))
  },[])
      console.log(data)

      const dispatch=useDispatch()

  return (
    <>
    <div className='p-5 conatiner'>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <img src={data?.thumbnail} alt="img"  className='img-fluid' height={"500px"} />
        </Col>
        <Col sm={12} md={6} lg={6} className='p-5' >
          <div className='mb-3'>Product ID :{data?.id}</div>
          <div className='mb-1'>{data?.title}</div>
          <div className='mb-3'>
            <span>{data?.price}</span>
          </div>
          <p style={{textAlign:'justify'}}>{data?.description}</p>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-lg border'onClick={()=>{dispatch(addToCart(data))}}>
            <i class="fa-solid fa-cart-plus" style={{color:"#B197FC"}}></i>
            </button>
            <button className='btn btn-lg border'onClick={() => { dispatch(addwishlist(data)) }}> 
            <i class="fa-solid fa-heart-circle-plus" style={{color:" #74C0FC"}}></i>
            </button>
          </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Details