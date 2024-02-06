import { Card, CardBody, CardHeader, Button, Typography } from '@material-tailwind/react';
import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from './ShopContext';
import axios from 'axios';

const AddCart = () => {
  const [products, setProducts] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const { cartItems, getTotalCartAmount, addToCart, removeFromCart, removeItemFromCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleConfirmDelete = () => {
    if (itemToRemove) {
      // Remove all quantities of the item from the cart
      const quantityToRemove = cartItems[itemToRemove];
      for (let i = 0; i < quantityToRemove; i++) {
        removeItemFromCart(itemToRemove);
      }
      
      setShowDeleteConfirmation(false);
      setItemToRemove(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setItemToRemove(null);
  };

  const handleRemoveClick = (productId) => {
    if (cartItems[productId] === 1) {
      setItemToRemove(productId);
      setShowDeleteConfirmation(true);
    } else {
      removeFromCart(productId);
    }
  };

  const handleDeleteClick = (productId) => {
    setItemToRemove(productId);
    setShowDeleteConfirmation(true);
  };

  return (
    <div className='top-10 items-center justify-center mt-10'>
      <h1 className='text-center font-bold text-lg'>Shopping Cart</h1>

      {showDeleteConfirmation && (
        <div className='bg-black/[.5] w-full h-full absolute z-50 top-0 bottom-0 right-0 left-0'>
          <Card className="w-full left-0 min-h-96 fixed items-center z-50 top-20 md:top-32 justify-center" shadow={false}>
            <CardHeader className="" shadow={false} floated={false}>
              <p>Are you sure you want to delete this?</p>
            </CardHeader>
            <CardBody>
              <Button onClick={handleConfirmDelete} className='mr-5'>Yes</Button>
              <Button onClick={handleCancelDelete}>No</Button>
            </CardBody>
          </Card>
        </div>
      )}

      
      {products.map((product, i) => {
        if (cartItems[product.id] !== 0) {
          return (
            <Card className='ml-5 flex-row items-center justify-center' shadow={false} key={i}>
              <CardHeader className='w-10 h-full' floated={false}>
                <img src={product.image} alt="" className='object-contain md:w-52' />
              </CardHeader>
              <CardBody className='w-50 '>
                <Typography variant="h6" className='truncate w-32 md:w-96 '>{product.title}</Typography>
                <Typography className='w-32 text-xs md:text-lg'>Price: ${product.price}</Typography>
                <div className='flex items-center'>
                  <Button size='sm' className='mr-2' onClick={() => handleRemoveClick(product.id)}>-</Button>
                  <Typography>{cartItems[product.id]}</Typography>
                  <Button className='ml-2' size='sm' onClick={() => addToCart(product.id)}>+</Button>
                </div>
                {cartItems[product.id] > 0 && (
                  <Button size='sm' className='ml-2 mt-2' onClick={() => handleDeleteClick(product.id)}>DELETE</Button>
                )}
              </CardBody>
            </Card>
          )
        }
      })}

      {totalAmount > 0 ? 
      <Card shadow={false} className='items-center'>
        <CardBody>
          <Typography>Total Price of item(s): {totalAmount}</Typography>
        </CardBody>
      </Card>: 
      
      <Card shadow={false} className='text-center'>
        <CardHeader floated={false} shadow={false}>
          <Typography variant='h2'>Cart is Empty</Typography>  
        </CardHeader>  
      </Card>}
      
    </div>
  );
}

export default AddCart;
