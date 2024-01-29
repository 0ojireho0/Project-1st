import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';



const Ecommerce = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className='md:py-0 py-16'>
      <h1 className='text-3xl md:text-left text-center md:text-5xl font-bold md:m-10 mb-5'>Buy Now!</h1>
      <div className="grid md:grid-cols-4 gap-5 grid-cols-1 md:mx-10 ">
        {products.map(item => <AllProducts key={item.id} item={item} ></AllProducts>     )}
      </div>
    </div>
  );
};

export default Ecommerce;
