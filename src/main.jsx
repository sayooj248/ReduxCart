import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import productstore from './Redux/Cartstore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider store={productstore}>
   <App />
   </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
