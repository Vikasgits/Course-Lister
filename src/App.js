import React from "react";
import { useState ,useEffect } from "react";
import { apiUrl,filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import spinner from "./Components/spinner"
import {toast} from "react-toastify"


const App = () =>{
  const[courses, setCourses]=useState(null);
  const[loading, setLoading]= useState(true);
  const[category,setCategory]=useState(filterData[0].title); //setting by default to "all"
  
    async function fetchData() {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output= await res.json(); 

        //Save data
        setCourses(output.data); 
      }
      catch(error){
        toast.error("Something went Wrong");
      }
      setLoading(false);
    }
    
    useEffect(() => {
      fetchData();
    },[])


  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar/>
      </div>
     
      <div className="bg-bgDark2">
        <Filter filterData={filterData} 
          category={category} setCategory={setCategory}
        />   
      </div>
      

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {
        loading ? ( <spinner/>) : (<Cards courses={courses} category={category}/>)
      }
      </div>
    </div>
    
      
  );
};

        
export default App;
