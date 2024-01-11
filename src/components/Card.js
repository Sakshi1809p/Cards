import React from 'react';
import {FcLike} from "react-icons/fc";

const Card = (props) => {
  const {course} = props
    console.log(course)
    function clickHandler(){
      
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="Empty "></img>
        </div>
        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center-items'>
            <button onClick={clickHandler}> 
              <FcLike fontSize='1.75rem'></FcLike> 
            </button>
        </div>

        <div className='p-4'>
            <p className='font-semibold leading-6 text-left text-white'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description}</p>
        </div>
    </div>
  )
}

export default Card;
