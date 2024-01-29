import axios from 'axios'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Taskgiver = () => {
  const [getData, setgetData] = useState('')
  const [loading, setLoading] = useState(false)
  const [popup, setPopup] = useState(false)
  const exitPopup = () =>{
    setPopup(!popup)
  }


  const dataFetched = () =>{
    setLoading(true)
    axios.get('https://www.boredapi.com/api/activity')
    .then(res =>{
      console.log(res.data.activity)
      setgetData(res.data.activity)
      setLoading(false)
      setPopup(true)
    }).catch(err =>{
      console.log(err)
      setLoading(false)
      setPopup(true)
    })
  }
  
  return (
  <>

    <div className='flex items-center justify-center w-full h-screen'>
      <div className='bg-[#D9D9D9] w-1/2 min-w-[300px] h-2/6 min-h-[300px] lg:max-h-80 lg:max-w-96 md:max-w-96 md:max-h-80 sm:max-w-80 sm:max-h-80 rounded-xl flex items-center justify-center'>
        <ul>
          <li className='text-center mt-5 font-bold text-xl'>Task Giver</li>
          <li className='text-center mt-5 font-semibold text-lg'>Are you bored?</li>
          <li className='text-center bg-black lg:w-28 lg:h-10 md:w-28 md:h-10 sm:w-28 sm:h-10 rounded-xl m-auto mt-5 w-1/2 h-10'><button onClick={dataFetched} className='text-white lg:w-28 lg:h-10 md:w-28 md:h-10 sm:w-28 sm:h-10 w-1/2 h-10 lg:text-base md:text-base sm:text-base text-[0.45rem] '>Click here</button></li>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin className='flex m-auto mt-3' /> : ""}
        </ul>
      </div>

      {popup && <div className='flex items-center justify-center absolute w-full h-screen'>
        <div className='bg-[#c5b9b9] w-1/2 min-w-[300px] h-2/6 min-h-[300px] rounded-xl lg:max-h-80 lg:max-w-96 md:max-w-96 md:max-h-80 sm:max-w-96 sm:max-h-80'>
          <h1 className='font-bold text-lg m-3 lg:m-5 md:m-5 sm:m-5 '>Your task is: </h1>
          <hr className='border-2 '/> <br />
          <p className='text-center font-semibold text-lg lg:m-2 md:m-2 sm:m-2 m-3'>{getData}</p>
          <hr className='border-2 lg:mt-5 md:mt-5 sm:mt-5'/>
          <div className='flex'>
            <button onClick={exitPopup} className='ml-auto bg-white text-black hover:bg-black hover:text-white lg:mt-14 lg:mr-5 lg:w-24 lg:h-10 md:mt-14 md:mr-5 md:w-24 md:h-10 sm:mt-14 sm:mr-5 sm:w-24 sm:h-10 w-24 h-10 mt-20 mr-5 rounded-xl'>Close</button>
          </div>


        </div>



      </div> }

        
       
        
    
    </div>
    
   
   

  </>
   
  )
}

export default Taskgiver
