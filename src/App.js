import { useState } from "react";
import Cancel from "./components/Cancel";
import FirstSection from "./components/FirstSection";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <FirstSection num={num} setNum={setNum}/>
      <Cancel setNum={setNum}/>
    </div>
  );
}

export default App;
