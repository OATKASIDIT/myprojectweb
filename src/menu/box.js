import "./box.css";

export default function BoxPost(props) {
  return (
    <div>
      <div className="bodyPOST">
        <div className="box">
          <h1>{props.title}</h1>
          {props.text}
        </div>
      </div>
    </div>
  );
}
