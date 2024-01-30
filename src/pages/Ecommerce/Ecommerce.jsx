import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';


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
    <>
    <Card shadow={false} className='items-center justify-center top-16'>
      <CardHeader floated={false} shadow={false}>
        <Typography>Buy Now!</Typography>
      </CardHeader>
      <CardBody>
        {loading ? <FontAwesomeIcon icon={faSpinner} spin className='flex m-auto mt-3' /> : ""}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 grid-cols-1 md:mx-10'>
        {products.map(item => <AllProducts key={item.id} item={item} ></AllProducts>     )}
        </div>
      </CardBody>
    </Card>
    
    
    
    </>
  )
}

export default Ecommerce
