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
        // console.log(response.data);
        // console.log(image);
        // set header
        const data = response.data;
        console.log(data);
        setImage(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // console.log(image);

  // const style = style.div.a`
    // styling inline?
    // not sure how to attach it to each component or HTML element

  return (
    <div className="App">
      <div>
        <h1>
          NASA Photo of the Day
        </h1>
      </div>
      <div>
        <h3>{ image.title }</h3>
        <p>{ image.copyright }</p>
        <p>
          { image.explanation }
          <span role="img" aria-label='go!'>🚀</span>
        </p>
      </div>
      <div>
        <img src= { image.url }></img>
      </div>
      <div>
        <p>{ image.date }</p>
      </div>
      
    </div>
  );
}

export default App;
