import { useState } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";

const Corousal = () => {
  const imgArray = [one, two, one, two, one, two, one, two];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : imgArray.length - 1));
  };

  const nextImg = () => {
    setCurrentIndex((prev) => (prev < imgArray.length - 1 ? prev + 1 : 0));
  };

  // setInterval(()=>currentIndex<imgArray.length-1?nextImg():prevImg(),5000)
  const endIndex = (currentIndex + 3) % imgArray.length;
  const displayImages =
    currentIndex > endIndex
      ? imgArray.slice(currentIndex).concat(imgArray.slice(0, endIndex + 1))
      : imgArray.slice(currentIndex, endIndex + 1);
  return (
    <div className="corousal-container py-6  bg-sky-950 opacity-80 flex">
      <div className="cards-conatiner w-11/12 mx-auto flex gap-7">
        <button className="text-3xl font-bold text-white" onClick={prevImg}>
          {"<"}
        </button>

        {displayImages?.map((image, index) => (
          <div className="w-3/12" key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}

        <button className="text-3xl font-bold text-white" onClick={nextImg}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Corousal;
