import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  const fetchData = async () => {
    try {
      const data = await axios.get(
        "https://random-hadith-generator.vercel.app/bukhari"
      );
      console.log(data);
      setJoke(data.data.data.hadith_english);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Async Completed");
    }
  };

  return (
    <>
      <br></br>
      <center>
        <button onClick={fetchData}>Get Hadis</button>
      </center>
      <center>
        <br></br>
        <i>{joke}</i>
      </center>
    </>
  );
}

export default App;
