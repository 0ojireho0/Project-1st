import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8); // Number of products to display initially
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8); // Increase the number of visible products
  };

  return (
    <>
      <Card shadow={false} className='items-center justify-center top-16'>
        <CardHeader floated={false} shadow={false}>
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} spin size='2xl' className='flex m-auto mt-3' />
          ) : (
            <Typography>Buy Now!</Typography>
          )}
        </CardHeader>
        <CardBody>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 grid-cols-1 md:mx-10'>
            {products.slice(0, visibleProducts).map(item => (
              <AllProducts key={item.id} item={item} />
            ))}
          </div>
          {visibleProducts < products.length && (
            <div className='justify-center items-center flex'>
              <Button onClick={loadMore} className='mt-5'>
                Load More
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Ecommerce;
