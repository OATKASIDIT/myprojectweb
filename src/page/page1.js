import Menuheader from "../menu/Menuheader";
import BoxPost from "../menu/box";
import "./page1.css";

function Page1() {
  const postList = [
    { head: "123", msg: "Hello" },
    { head: "2133213", msg: "Helasdlo" },
    { head: "4", msg: "Hasdasdello" },
    { head: "122133", msg: "Helasdasdasdlo" },
  ];
  return (
    <div>
      <Menuheader />
      <div className="bodyPOST">
        {postList.map((value, index) => (
          <BoxPost key={index} title={value.head} text={value.msg}></BoxPost>
        ))}
      </div>
    </div>
  );
}

export default Page1;
