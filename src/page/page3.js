import axios from "axios";
import { useRef } from "react";
import Menuheader from "../menu/Menuheader";
import "./page3.css";
function Page3() {
  const title = useRef(null);
  const text = useRef(null);

  const insertdata = async()=>{
    try{
      const responseData = await axios.post("http://localhost:3521/api/insertData",{tt:title.current.value,tx:text.current.value})
      alert(responseData.data)
    }catch(err){
      alert(err.response.data)
    }
  }
  return (
    <div>
      <Menuheader />
      <h1>Hello Page3</h1>
      <div className="page3-header">
        <form onSubmit={(e)=>{
          e.preventDefault();insertdata();
        }}>
          <h1>Post</h1>
          <label>title</label>
          <input ref={title}></input>
          <labe>text</labe>
          <input ref={text}></input>
          <button type="submit">post text</button>
        </form>
      </div>
    </div>
  );
}

export default Page3;
