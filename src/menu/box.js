import "./box.css";
import axios from "axios";
export default function BoxPost({id,title,text}) {

  const deleteapidata = async()=>{
    try{
      const responseData = await axios.delete("http://localhost:3521/api/deleteData?id="+id)
      alert(responseData.data)
    }catch(err){
      alert(err.response.data)
    }
    window.location.reload();
  }
  return (
    <div>
      <div className="bodyPOST">
        <div className="box">
          <h1>{title}</h1>
          {text}
          <br></br>
          <button style={{fontSize:30}} onClick={()=>{
            deleteapidata();
          }}>ลบ</button>
        </div>
      </div>
    </div>
  );
}
