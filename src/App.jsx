
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Footer from './Components/Footer';
import Header from './Components/Header';



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element= { <Home/> } />
        <Route path='/details/:id' element ={ <Details/> } />
        <Route path='/wish' element ={ <Wishlist/> } />
        <Route path='/cart' element ={ <Cart/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
