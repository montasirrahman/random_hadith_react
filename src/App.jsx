import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [hadis, setHadis] = useState("");

  // const fetchData = async () => {
  //   try {
  //     const data = await axios.get(
  //       "https://random-hadith-generator.vercel.app/bukhari"
  //     );
  //     console.log(data);
  //     setHadis(data.data.data.hadith_english);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     console.log("Async Completed");
  //   }
  //};

  const fetchData = () => {
    const data = axios.get(
      "https://random-hadith-generator.vercel.app/bukhari"
    );
    data
      .then((res) => {
        console.log(res.data);
        setHadis(res.data.data.hadith_english);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <br></br>
      <center>
        <button onClick={fetchData}>Get Hadis</button>
      </center>
      <center>
        <br></br>
        <i>{hadis}</i>
      </center>
    </>
  );
}

export default App;
