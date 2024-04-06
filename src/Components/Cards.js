import React from "react";
import Card from "./Card";
import { useState } from "react";


const Cards= (props) =>{
    let courses= props.courses;
    let category=props.category;
    //when you initailly start the page all courses are unliked by default
    const[likedCourses, setLikedCourses]=useState([]);

    //this function gets all the courses combined into a single array
    //initially in API the data were in key value pairs
    //and we needed it all in an single array to use map function,
    // so we used two for loop to get it done

    function getCourses() {
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
            })
            return allCourses;
        }
        else{
            //courses only have 4 array excluding "all state"
            return courses[category];

        }

        
        
    }
    

    

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => {
                return <Card key={course.id} course={course}
                    likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })
            }

        </div>
    )
    }



export default Cards