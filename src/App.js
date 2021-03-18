import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

// importing some form of an API key using the documentation within NASA
// https://api.nasa.gov/planetary/apod

function App() {

  const [ image, setImage ] = useState([]);
  // header usestate


  // use useEffeect hook to grab the GET request from NASA
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        console.log(response.data);
        setImage(response.data);
        // set header
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // const style = style.div.a`
    // styling inline?
    // not sure how to attach it to each component or HTML element

  return (
    <div className="App">
      <div>
        <img src= { image.url }></img>
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
