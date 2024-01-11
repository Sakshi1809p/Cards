import React from 'react';
import Card from "./Card";

export const Cards = ({courses}) => {
  let allCourses=[];
  const getCourses=() =>{
    Object.values(courses).forEach (array => {
      array.forEach((course)=>{
        allCourses.push(course);
      })
    })
    return allCourses; 
  }
  return (
    <div>
        {
          getCourses().map((course)=>(
            <Card key={course.id} course={course}/>
          )
          )
        }
    </div>
  )
}
