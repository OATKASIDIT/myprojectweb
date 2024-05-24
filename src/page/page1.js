import axios from "axios";
import Menuheader from "../menu/Menuheader";
import BoxPost from "../menu/box";
import "./page1.css";
import { useState } from "react";
import { useEffect } from "react";

function Page1() {

  const [dataApi,setDataapi] = useState([]);

  
  useEffect(()=>{
    const getapi = async() => {
      try{
        const responseData = await axios.get("http://localhost:3521/api/data")
        setDataapi(responseData.data);
        
        
      }catch(error){
        alert(error.response.data);
      }
      
    }
    getapi();
  },[]);

  
  return (
    <div>
      <Menuheader />
      <div className="bodyPOST">
        {dataApi.length===0?<div></div>:
        dataApi.map((value,index)=>(
          <BoxPost id={value.id} title = {value.title} text ={value.text}/>
        ))}
      </div>
    </div>
  );
}

export default Page1;
