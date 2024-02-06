import React, { useContext, useState } from 'react';
import { ShopContext } from './ShopContext';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


const AllProducts = (props) => {

  const { id, title, image, price, description, rating } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id]

  const [popupToggle, setPopupToggle] = useState(false);

  const changeContent = () => {
    setPopupToggle(!popupToggle);
  };



  return (
    <>
    <Card className='w-full items-center cursor-pointer p-2' onClick={() => changeContent(props)}>
      <CardHeader className='h-80 md:h-40 lg:h-80' floated={false}>
        <img src={image} alt="" className='object-contain w-full h-full'/>
      </CardHeader>
      <CardBody className='h-52 lg:h-52 md:h-40'>
        <Typography variant="h6" color="blue-gray" className="mb-2 text-sm">{title}</Typography>
        <Typography className='text-sm'>Price: {price}</Typography>
        <Typography className='text-sm'>Rates: {rating.rate}</Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button>Read More</Button>
      </CardFooter>
    </Card>

    {popupToggle && (
        <div className='bg-black/[.5] top-0 right-0 left-0 bottom-0 fixed z-50'>
          <Card className='w-full left-0 min-h-96 fixed items-center z-50 top-20 md:top-32 justify-center md:flex-row'>
            <button className='top-5 right-10 md:absolute' size='sm' onClick={() => changeContent(props)} variant='gradient'>X</button>
            <CardHeader className='w-52 h-52 ' floated={false}>
              <img src={image} alt="" className='object-contain h-full w-full'/>
            </CardHeader>
            <CardBody className='text-justify md:w-1/3'>
              <Typography variant='h6' className=''>{title}</Typography>
              <Typography className='text-xs'>{description}</Typography>
              <Typography>Price: ${price}</Typography>
              <Typography>Rates: {rating.rate}</Typography>   
              <div className='items-center justify-center flex md:block'>
                <Button size='sm' variant='gradient' onClick={() => addToCart(id)} className='block'>
                    Add to Cart
                </Button>
              </div>
            </CardBody>


          </Card>
        </div>

    )}
      

    </>
  )
}

export default AllProducts
