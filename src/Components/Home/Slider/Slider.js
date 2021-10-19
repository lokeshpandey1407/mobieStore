import React from "react";
import SliderData from "../../Data/SliderData";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./Slider.css";
import LoadingSpinner from "../../UI/LoadingSpinner";

const Slider = () => {
  const [counter, setCounter] = React.useState(0);
  const [imageData, setImageData] = React.useState([]);
  // const [isSliderLoading, setIsSliderLoading] = React.useState(false);

  const fetchData = async () => {
    const response = await fetch("Data/ImagesData.json");
    const sliderImages = await response.json();
    setImageData(sliderImages.SliderData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const prevSlide = () => {
    setCounter(counter === 0 ? SliderData.length - 1 : counter - 1);
  };
  const nextSlide = () => {
    setCounter(counter === SliderData.length - 1 ? 0 : counter + 1);
  };
  return (
    <>
      <div className="imageSlider">
        <BiLeftArrowAlt className="prevBtn" onClick={prevSlide} />
        {imageData.map((data, index) => (
          <div
            key={index}
            className={
              index === counter ? "image-container active" : "image-container"
            }
          >
            <img className="image" src={data.image} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
        <BiRightArrowAlt className="nextBtn" onClick={nextSlide} />
      </div>
    </>
  );
};

export default Slider;
