import React, { useContext, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useCart } from 'react-use-cart';



const AllProducts = ({ item }) => {
  const { title, image, price, description, rating } = item;
  const [popupToggle, setPopupToggle] = useState(false);

  const changeContent = () => {
    setPopupToggle(!popupToggle);
  };

  const { addItem } = useCart();

  




  return (
    <>
      <Card className="cursor-pointer items-center" onClick={() => changeContent(item)}>
        <CardHeader floated={false}>
          <div className="h-96 flex">
            <img src={image} alt="card-image" className="object-contain" />
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography variant="h6">Price: {price}$</Typography>
          <Typography variant="h6">Rates: {rating.rate}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>

      {popupToggle && (
        <div className='bg-black/[.5] top-0 right-0 left-0 bottom-0 fixed z-50'>
          <Card className='md:top-40 top-10 h-[30rem] max-h-screen h-96 lg:w-3/5 lg:max-w-5xl lg:min-w-[55rem] lg:max-h-[30rem] lg:min-h-[30rem] md:w-1/2 md:h-2/3 lg:bottom-20 justify-center lg:flex-row md:z-50 md:ml-52'>
            <button onClick={() => setPopupToggle(false)} className='font-bold lg:ml-[50rem] lg:mt-5 lg:absolute md:ml-80'>x</button>
            <CardHeader floated={false} shadow={false} className='lg:m-20'>
              <img src={image} alt="" className='lg:w-60 lg:h-60 md:h-96 md:object-contain '/>
            </CardHeader>
            <CardBody className='w-96 text-justify'>
              <Typography color='gray' variant='h4' className='md:mb-4'>
                {title}
              </Typography>
              <Typography color='gray' className='font-normal md:mb-4 text-xs md:text-base'>
                {description}
              </Typography>
              <Typography color='gray' variant='h6' className=''>
                ${price}
              </Typography>
              <Typography color='gray' variant='h6'>
                Rates: {rating.rate}
              </Typography>
              <Button size='sm' variant='gradient' onClick={() => addItem(item)}>
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
};

export default AllProducts;
