import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./Data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
 
const App = () => {

const [courses, setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

const fetchData = async() => {
  setLoading(true);
  try{
    const res = await fetch(apiUrl);
    const output = await res.json();
    // save data into a variable
    
    setCourses(output.data);
    
   
  }
  catch(error){
    toast.error("Something went wrong");
  }
  setLoading(false);
}

useEffect( () =>{
  fetchData();
},[]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <div>
      <Navbar/>
      </div>
      
      <div className="bg-slate-800">
      <div>
      <Filter 
      filterData = {filterData}
      category ={category}
      setCategory={setCategory}
      />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50px]">
      {
        loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category} />)
      }
      </div>
      </div>
    </div>
  );
};

export default App;  