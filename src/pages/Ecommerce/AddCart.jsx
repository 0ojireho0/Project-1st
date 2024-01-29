import { Card, CardBody, CardHeader, Button, Typography, CardFooter } from '@material-tailwind/react'
import React from 'react'
import { useCart } from 'react-use-cart'


const AddCart = () => {

    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } = useCart()
    if (isEmpty) return <h1 className='text-center mt-10 font-bold text-3xl'>No items added</h1>




  return (
    <>
    <div className='lg:w-4/5 lg:m-auto md:w-4/5 md:m-auto sm:w-4/5 sm:m-auto min-[360px]:w-4/5 min-[360px]:m-auto '>
        <h1 className='lg:text-center lg:font-bold lg:text-3xl lg:mt-10 md:text-center md:font-bold md:text-3xl sm:text-center sm:font-bold sm:text-3xl sm:mt-10  '>Shopping Cart</h1>
      {items.map((product, i)=>{
        return(
          
                <Card shadow={false} className='flex-row lg:items-center lg:justify-center md:items-center md:justify-center sm:items-center sm:justify-center' key={i}>
                    <CardHeader floated={false} shadow={false} className='lg:min-w-3.5 lg:max-w-2xl lg:w-2/4 md:min-w-3.5 md:max-w-2xl md:w-2/4 sm:min-w-3.5 sm:max-w-2xl sm:w-2/4'>
                        <div className='flex lg:items-center md:items-center sm:items-center '>
                            <img src={product.image} alt="" className='lg:h-52 lg:w-52 md:h-40 md:w-40 md:mr-3 sm:h-12 sm:w-12 sm:mr-1 object-contain h-10 w-10'/>
                            <Typography className='sm:text-xs'>{product.title}</Typography>
                        </div>
                    </CardHeader>
                    <CardBody className=''>
                        <div className='flex lg:items-center md:items-center sm:items-center '>
                            <Button onClick={() => updateItemQuantity(product.id, product.quantity - 1)} className='lg:mr-5 md:mr-2 sm:mr-1'>-</Button>
                            <Typography variant='h5'>{product.quantity}</Typography>
                            <Button onClick={() => updateItemQuantity(product.id, product.quantity + 1)} className='lg:ml-5 md:ml-2 sm:ml-1'>+</Button>
                        </div>
                    </CardBody>
                    <CardFooter className=''>
                        <div className='flex lg:items-center md:items-center sm:items-center'>
                            <Typography className='lg:mr-5 md:mr-2 sm:mr-1'>${product.price}</Typography>
                            <Button onClick={() => removeItem(product.id)} className=''>Remove</Button>
                        </div>
                    </CardFooter>
                </Card>
         
        )
      })}
    </div>
    
    <Card shadow={false} className='items-center'>
        <CardBody>
            <Typography>Total Price of item(s): {cartTotal}</Typography>
        </CardBody>
    </Card>

    </>

  )
}

export default AddCart
