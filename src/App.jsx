import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getImageUrl } from "./utils";

function Card({ children }) {
  const style ={
    border: "1px solid black",
    borderRadius: "2px"
  }
  return <div className="card" style={style}>{children}</div>;
}
function Avatar({ person, size }) {
  return (
    <img
      className="Avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    ></img>
  );
}

function App() {
  return (
    
    <Card>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
      <p>Test</p>
    </Card>
  );
}

export default App;
