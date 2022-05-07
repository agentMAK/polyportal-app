import DisplaySlides from "./DisplaySlides";
import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";

const Lesson = (props: any) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide < props.slides.getTotalSlides() +1 ? prevCurrentSlide +1 : props.slides.getTotalSlides()+1);
  };

  const previousSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide > 0 ? prevCurrentSlide - 1: 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  },[currentSlide]);

  let percentageDone = currentSlide/(props.slides.getTotalSlides()+1)*100

  return (
    <div className="pt-20">
      <div className='flex flex-row justify-center content-end h-20 w-full border-b-4 fixed top-0 bg-white z-50'>
        <ProgressBar nextSlide={nextSlide} previousSlide={previousSlide} percentageDone={percentageDone}></ProgressBar>
      </div>
      <div className="max-w-md mx-auto mt-20">
        <DisplaySlides slides={props.slides} redirect={props.redirect} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} nextSlide={nextSlide}></DisplaySlides>
      </div> 
    </div>
  );
};

export default Lesson;