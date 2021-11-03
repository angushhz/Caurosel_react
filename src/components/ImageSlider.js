import { DataSlider } from "./DataSlider";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = DataSlider.length;
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  if (!Array.isArray(DataSlider) || length <= 0) return null;
  console.log(current);
  return (
    <>
      <div className="slider">
        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
        {DataSlider.map((slider, index) => {
          return (
            <div
              key={index}
              className={index === current ? "active" : "disabled"}
            >
              {current === index && (
                <img
                  key={index}
                  src={slider.imageURL}
                  alt="slider food"
                  className="image"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
