
import './App.css';
import Countrycard from './Countrycard';
import { useEffect, useState } from 'react';

function App() {

  const [flags,setFlags]= useState([])


  const fetchAPI=async ()=>{
    try{
      const res= await fetch("https://xcountries-backend.azurewebsites.net/all")
      const data=await res.json()
      // console.log(data)
      setFlags(data)

    }catch(err){
      console.error("Error fetching data:",err)
      
    }
  }

  useEffect(()=>{
    fetchAPI()
  },[])

  return (
    <div className="App" style={{
      display:"flex",
      flexWrap:"wrap",
      width:"100%",
      justifyContent:"center"
      }}>
      {flags.map((flag,idx)=>(
        <Countrycard key={idx} image={flag.flag} name={flag.name}/>
      ))}
    </div>
  );
}

export default App;
