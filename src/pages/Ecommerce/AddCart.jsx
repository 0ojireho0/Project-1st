import { Card, CardBody, CardHeader, Button, Typography, CardFooter } from '@material-tailwind/react'
import React from 'react'
import { useCart } from 'react-use-cart'

const AddCart = () => {

    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } = useCart()
    if (isEmpty) return <h1 className='text-center mt-10 font-bold text-3xl'>No items added</h1>


  return (
    <>
    <div className='top-10 items-center justify-center mt-10'>
    <h1 className='text-center font-bold text-lg'>Shopping Cart</h1>
 
    {items.map((product,i)=>{
        return(
            <Card className='ml-5 flex-row items-center justify-center' shadow={false}>
                <CardHeader className='w-10 h-full' floated={false}>
                    <img src={product.image} alt="" className='object-contain md:w-52'/>
                </CardHeader>
                <CardBody className='w-50 '>
                    <Typography variant="h6" className='truncate w-32 md:w-96 '>{product.title}</Typography>
                    <Typography className='w-32 text-xs md:text-lg'>Price: ${product.price}</Typography>
                    <div className='flex items-center'>
                        <Button size='sm' className='mr-2' onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                        <Typography>{product.quantity}</Typography>
                        <Button className='ml-2' size='sm' onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                    </div>
                    <Button size='sm' className='ml-2 mt-2' onClick={() => removeItem(product.id)}>REMOVE</Button>
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

export default AddCart
