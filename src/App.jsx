import React,{ useEffect, useState } from "react";
import Tours from "./assets/Tours";
import "./index.css";

const App = () => {
  const[isLoading,setIsLoading]=useState(true);
  const[isError,setIsError]=useState(true);
  const[datas,setDatas]=useState({});
  const url = 'https://course-api.com/react-tours-project';

  // fetching data
  const fetchData=async(url)=>{
    setIsLoading(true);
    try{
      const response= await fetch(url);
    const data=await response.json();
      setDatas(data);
      setIsLoading(false)
      setIsError(false);
    }
    catch(err)
   { 
      console.log(err);
      setIsLoading(false); 
    }
  }
  useEffect(()=>{
    fetchData(url);
  },[])

  // refreshing data
   
    if(datas.length===0)
    {
      return <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button type="button" style={{marginTop:"2rem"}}className="btn" onClick={()=>fetchData(url)}>Refresh</button>
        </div>
      </main>
    }

    const remove=(id)=>{
       const data= datas.filter((tour)=>id!==tour.id)
        setDatas(data);
    }
  if(isLoading)
  return <div className="loading"></div>
  else if(isError)
  return <h1>there is a network error</h1>
  else
  return (
      <>
       <Tours tours={datas} remove={remove}/>
      </>
  )
};
export default App;
