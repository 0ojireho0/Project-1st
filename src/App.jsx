import React from 'react'
import Taskgiver from './pages/Taskgiver'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Ecommerce from './pages/Ecommerce/Ecommerce'
import { CartProvider } from 'react-use-cart'
import AddCart from './pages/Ecommerce/AddCart'
import Error404 from './components/Error404'




const App = () => {
  return (
  <>

      <BrowserRouter>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route exact path='/' element={<Taskgiver />} /> 
            <Route path='/ecommerce' element={<Ecommerce />} />
            <Route path='addcart' element={<AddCart />} />
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>  
  </>
  )
}

export default App
