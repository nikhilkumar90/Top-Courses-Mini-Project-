import React, { useState } from 'react'
import Card from  './Card';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;


  const [likedCourses, setLickedCourses] = useState([]);

    let allCourses = [];
 
    //returns you a list of all courses received from the api response
    const  getCourses = () => {
      if (category === "All"){
        Object.values(courses).forEach( (courseCategory) => {
          courseCategory.forEach((course) =>{
              allCourses.push(course);
          })
        })
        return allCourses;
      }
      else {
        // main sirf specific category ka data array krunga
        return courses[category];
        }
          
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {!courses ? (
            <div>
                <p>No Data Found</p>
            </div>
        ):(getCourses().map((course) =>{
            
            return  <Card key={course.id} course={course}
            likedCourses = {likedCourses}
            setLickedCourses ={setLickedCourses} />
         }))}
     
    </div>  
  )
}

export default Cards 