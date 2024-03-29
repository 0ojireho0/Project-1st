import React, { useState } from 'react';
import Taskgiver from './pages/Taskgiver';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import AddCart from './pages/Ecommerce/AddCart';
import Error404 from './components/Error404';
import { ShopContextProvider } from './pages/Ecommerce/ShopContext';

const App = () => {
  const [is404, setIs404] = useState(false);

  return (
    <ShopContextProvider>
      <Router>
        {!is404 && <Navbar />}
        <Routes>
          <Route exact path='/' element={<Taskgiver />} /> 
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/addcart' element={<AddCart />} />
          <Route
            path='*'
            element={<Error404 on404={() => setIs404(true)} />}
          />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
