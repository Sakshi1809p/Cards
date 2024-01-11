import React, { useEffect, useState } from "react";
import { apiUrl,filterData } from "./data";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards";
import { Toast, toast } from "react-toastify";
import { Spinner } from "./components/Spinner";


const App = () => {

  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  
    async function fetchData() {
      setLoading(true);
      try{
        let response=await fetch(apiUrl);
        let output=await response.json();
        //save data into a variable
        // toast("DONE")
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    useEffect( ()=>{
    fetchData();
  },[]);

  return( <div className="flex-col min-h-screen" >
    <Navbar/>
<div className="bg-bgDark2">
    <Filter
    filterData={filterData}
    />

    <div className="w-11/12 flex-wrap max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
      {
      loading ? (<Spinner/>): (<Cards courses={courses} />)
      }
    </div>
    </div>

  </div>
  );
};

export default App;
