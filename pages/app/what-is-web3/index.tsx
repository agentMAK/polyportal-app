import type { NextPage } from "next";
import Meta from "../../../components/meta";
import DisplaySlides from "../../../components/app/DisplaySlides";
import Web3_1 from '../../../components/app/lessons/Web3_1'
import { useEffect, useState } from "react";
import ProgressBar from "../../../components/app/ProgressBar";

const Test: NextPage = (props: any) => {

  const slides = Web3_1()

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide < slides.getTotalSlides() ? prevCurrentSlide +1 : slides.getTotalSlides());
  };

  const previousSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide > 0 ? prevCurrentSlide - 1: 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  },[currentSlide]);

  let percentageDone = currentSlide/(slides.getTotalSlides())*100


  return (
    <div className="pt-20">
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className='flex flex-row justify-center content-end h-20 w-full border-b-4 fixed top-0 bg-white z-50'>
        <ProgressBar nextSlide={nextSlide} previousSlide={previousSlide} percentageDone={percentageDone}></ProgressBar>
      </div>
      <div className="max-w-md mx-auto mt-20">
        <DisplaySlides slides={slides} redirect="/learn/web3" currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} nextSlide={nextSlide}></DisplaySlides>
      </div>
    </div>
  );
};

export default Test;