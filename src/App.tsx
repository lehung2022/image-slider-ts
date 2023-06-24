import './index.css';
import { useState } from "react";


const images = [
  "https://wallpapercave.com/dwp1x/wp5202251.jpg",
  "https://wallpapercave.com/dwp1x/wp5202257.jpg",
  "https://wallpapercave.com/dwp1x/wp7070191.jpg",
  "https://wallpapercave.com/dwp1x/wp5202254.png",
  "https://wallpapercave.com/dwp1x/wp7070273.jpg",
  "https://wallpapercave.com/dwp1x/wp7070282.jpg",
  "https://wallpapercave.com/dwp1x/wp7070298.jpg",
  "https://wallpapercave.com/dwp1x/wp7070315.jpg",
  "https://wallpapercave.com/dwp1x/wp5746184.jpg"
]



function App() {

  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images?.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images?.length - 1 : current - 1);
  }

  return (
    <>
      <div className="App">
        <h2>Project 1: Carousel</h2>
        <div className="slider">
          <div className="left-arrow" onClick={prevSlide}>
            ⬅️
          </div>
          {images?.map(
            (image, index) =>
              current === index && (
                <div key={image} className="slide">
                  <img src={image} alt="images" width={800} height={600} />
                </div>
              )
          )}
          <div className="right-arrow" onClick={nextSlide}>
            ➡️
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
