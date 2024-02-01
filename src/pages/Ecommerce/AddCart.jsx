import { Card, CardBody, CardHeader, Button, Typography, CardFooter } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useCart } from 'react-use-cart'

const AddCart = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } = useCart()
  if (isEmpty) return <h1 className='text-center mt-10 font-bold text-3xl'>No items added</h1>

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleUpdateItemQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      // If the new quantity is 0, set the item to remove and show the delete confirmation modal
      setItemToRemove(productId);
      setShowDeleteConfirmation(true);
    } else {
      // Otherwise, proceed with the quantity update
      updateItemQuantity(productId, newQuantity);
    }
  };

  const handleConfirmDelete = () => {
    // Remove the item and close the delete confirmation modal
    removeItem(itemToRemove);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    // Close the delete confirmation modal without removing the item
    setItemToRemove(null);
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <div className='top-10 items-center justify-center mt-10'>
        <h1 className='text-center font-bold text-lg'>Shopping Cart</h1>

        {showDeleteConfirmation && (
        <div className='bg-black/[.5]  w-full h-full absolute z-50  top-0 bottom-0 right-0 left-0' >
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

        {items.map((product, i) => {
          return (
            <Card className='ml-5 flex-row items-center justify-center' shadow={false} key={i}>
              <CardHeader className='w-10 h-full' floated={false}>
                <img src={product.image} alt="" className='object-contain md:w-52' />
              </CardHeader>
              <CardBody className='w-50 '>
                <Typography variant="h6" className='truncate w-32 md:w-96 '>{product.title}</Typography>
                <Typography className='w-32 text-xs md:text-lg'>Price: ${product.price}</Typography>
                <div className='flex items-center'>
                  <Button size='sm' className='mr-2' onClick={() => handleUpdateItemQuantity(product.id, product.quantity - 1)}>-
                  </Button>
                  <Typography>{product.quantity}</Typography>
                  <Button className='ml-2' size='sm' onClick={() => handleUpdateItemQuantity(product.id, product.quantity + 1)}>+
                  </Button>
                </div>
                <Button size='sm' className='ml-2 mt-2' onClick={() => {
                  setItemToRemove(product.id);
                  setShowDeleteConfirmation(true);
                }}>REMOVE</Button>
              </CardBody>
            </Card>
          )
        })}

        <Card shadow={false} className='items-center'>
          <CardBody>
            <Typography>Total Price of item(s): {cartTotal}</Typography>
          </CardBody>
        </Card>
      </div>


    </>
  )
}

export default AddCart;
