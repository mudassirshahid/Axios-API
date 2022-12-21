import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "./axios";


const API = "https://jsonplaceholder.typicode.com"

function App() {
  const [myData, setMyData] = useState([]);

  const [ isError, setIsError] = useState("");

  //NOTE: USING PROMISES

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input])
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  //NOTE: USING ASYNC AWAIT

  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message)
  //   }
    
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  // //ANOTHER WAY
  // const getApiData = async (url) => {
  //   try {
  //     const res = await axios.get(url);
  //   setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message)
  //   }
    
  // };

  // useEffect(() => {
  //   getApiData(`${API}/posts`);
  // }, []);
  
  //ANOTHER WAY
  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
    setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
    
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  return (
    <>
      <h1>Axios</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
