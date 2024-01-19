import React from 'react';
import { useState } from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { Toast, toast } from "react-toastify";

const Card = (props) => {
 let course=props.course;
 let likedCourses=props.likedCourses;
 let setLikedCourses=props.setLikedCourses;

 function clickHandler()
 {
  if(likedCourses.includes(course.id)){
    setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
    toast.warning("Like removed");
  }
  else{
    if(likedCourses.length===0){
      setLikedCourses([course.id]);
    }
    else{
      setLikedCourses((prev)=>[...prev,course.id]);
    }
    toast.success("Liked Successfully");
  }
 }
 
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="Empty "></img>
        
        <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center-items'>
            <button onClick={clickHandler}> 
              {
                likedCourses.includes(course.id) ?(<FcLike fontSize="1.75rem"/>): (<FcLikePlaceholder fontSize='1.75rem'/>) 
              }
            </button>
        </div>
        </div>

        <div className='p-4'>
            <p className='font-semibold leading-6 text-left text-white'>{course.title}</p>
            <p className='mt-2 text-white'>
              {
              course.description.length>100 ? (course.description.substr(0,100))+"...":
              (course.description)
              }
              </p>
        </div>
    </div>
  )
}

export default Card;
