import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

 
  

  return (
    <div className='md:py-0 py-16'>
      <h1 className='text-3xl md:text-left text-center md:text-5xl font-bold md:m-10 mb-5'>Buy Now!</h1>
      <div className="grid md:grid-cols-4 gap-5 grid-cols-1 md:mx-10 ">
        {loading ? <FontAwesomeIcon icon={faSpinner} spin className='flex m-auto mt-3' /> : ""}
        {products.map(item => <AllProducts key={item.id} item={item} ></AllProducts>     )}
      </div>
    </div>
  );
};

export default Ecommerce;
