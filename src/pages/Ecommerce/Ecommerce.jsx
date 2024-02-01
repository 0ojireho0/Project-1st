import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
      setLoading(false);
    }, 500);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      // User has scrolled to the bottom, and not currently loading
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, visibleProducts]);

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
            {products.slice(0, visibleProducts).map((item) => (
              <AllProducts key={item.id} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Ecommerce;
