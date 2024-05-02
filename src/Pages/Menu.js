import '../Css/MenuPage.css';
import React, {useState } from 'react';

export default function Menu (){
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

  return (
    <div className="Container">
      <div className="Slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="Slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}