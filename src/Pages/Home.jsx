import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { fetchProductThank , onNavigateNext,onNavigatePrev} from '../Redux/Slice';
import { Spinner } from 'react-bootstrap';
import { addwishlist } from '../Redux/wishslice';
import { addToCart } from '../Redux/Cartslice';


function Home() {
  const dispatch = useDispatch()
  const { product, loading ,error,productsPerPage,currentPage} = useSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(fetchProductThank())
  }, [])

  const totalpages=Math.ceil(product?.length/productsPerPage)
  const indexOfLastElement=currentPage * productsPerPage
  const indexOfFirstElement=indexOfLastElement-productsPerPage
  const validCards=product?.slice(indexOfFirstElement,indexOfLastElement)

  const navigatepre=()=>{
    if(currentPage!=1){
      dispatch(onNavigatePrev())
    }
  }
  const navigateNext=()=>{
      if(currentPage!=totalpages){
        dispatch(onNavigateNext())

      }
   }
  return (
    <>

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 class="display-4 fw-bolder">ReduxCart</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop whatever you desire</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              !loading&& error &&
              <div className='text-denger display-4'>{error}</div>
            }

            {
              loading ?
                <div className='d-flex justify-content-center'>
                  <Spinner
                    as="span"
                    animation='border'
                    size='xl'
                    role='status'
                    aria-hidden='true'
                  />
                  <h2 className='ms-2'>Loading</h2>
                </div>

                :!error&&
                validCards.map(item => (
                  <div className="col mb-5">
                    <div className="card h-100">
                      <Link to={`/details/${item.id}`}>
                        <img className="card-img-top" height={'180px'} src={item?.thumbnail} alt="..." />
                      </Link>
                      <div className="card-body p-4">
                        <div className="text-center">


                          <h5 className="fw-bolder">{item?.title.slice(0,10)}...</h5>
                          {item?.price}
                        </div>
                        <div className='d-flex justify-content-between'>
                          <button className='btn border' onClick={()=>{dispatch(addToCart(item))}} >
                            <i class="fa-solid fa-cart-plus" style={{ color: "#B197FC" }}></i>
                          </button>
                          <button className='btn border' onClick={() => { dispatch(addwishlist(item)) }}>
                            <i class="fa-solid fa-heart-circle-plus" style={{ color: " #74C0FC" }}></i>
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>

                ))


            }

          </div>
        </div>
        <div className='text-center'>
          <button className='btn' onClick={navigatepre}><i className='fa-solid fa-arrow-left'></i></button>
          <span>{currentPage}/{totalpages}</span>
          <button className='btn' onClick={navigateNext}><i className='fa-solid fa-arrow-right'></i></button>

        </div>
      </section>
    </>
  )
}

export default Home