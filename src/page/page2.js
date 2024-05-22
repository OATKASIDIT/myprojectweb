import { useEffect, useRef, useState } from "react";
import Menuheader from "../menu/Menuheader";

function Page2() {
  const [count, setCount] = useState(0);
  const [msg, setmsg] = useState(0);
  const text = useRef(null);
  useEffect(() => {
    if (count) setmsg(5555 + count);
  }, [count]);
  return (
    <div>
      <Menuheader />
      <h1>Page2</h1>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        click
      </button>
      <br />
      <input
        ref={text}
        onChange={() => {
          console.log(text.current.value);
        }}
      ></input>
      {msg}
    </div>
  );
}

export default Page2;
