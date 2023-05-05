import "./App.css";
import music from "./music.jpg";

import React, { useState } from "react";

function Hero1() {
  const [song, setSong] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ song }),
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data.prediction);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="herotxt">
      <div class='hero_section'>
        <div>
        <div class="heading_styling">
          <h4 class="sub_heading">Stay in tune</h4>
          <h1 class="heading">MUSIC TO FILL YOUR HEART</h1>
          <p class="para">
            Music streaming that you can listen to anytime and anywhere you
            want.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form_styling">
          <label className="search-bar__label">
            <input
              type="text"
              placeholder="Search for a song"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              className="search-bar__input"
            />
            <button type="submit" className="search-bar__button">
              Search
            </button>
          </label>
        </form>
        </div>
        <div>
        <img src={music} alt='hero' class="music"/>
        </div>
      </div>
      <div className="search-bar__results">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="search-bar__result-image"
          />
        ))}
      </div>
    </div>
  );

  // return(
  //     <body>
  //     <div class="herotxt">
  //     <p class="headtxt">Find The Music That Match's Your</p>&nbsp;&nbsp;<p class="high">Vibe!!</p><br/>
  //     <p class="subhead">Unlock Your Perfect</p>&nbsp;<p class="subhigh">Soundtracks!!</p><br/>
  //     </div>
  //     <input placeholder="Share the name of the song closest to your heart" class="songinp"></input>
  //     <br/>
  //     <button class="btn1">Get Vibin'</button>
  //     <button class="btn2">Suprise Me</button>
  //     <img src={hero} alt='hero' class="hero"/>
  //     </body>
  // );
}

export default Hero1;
