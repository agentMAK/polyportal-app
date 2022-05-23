import DisplaySlides from "./DisplaySlides";
import { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";
import mixpanel from 'mixpanel-browser';
import { getSession, useSession } from "next-auth/react";

const Lesson = (props: any) => {

  const { data: session } = useSession()

  mixpanel.init(`${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID}`, {debug: false});
  if(session) {
    mixpanel.identify(`${session.id}`);
  }

  useEffect(() => {
    mixpanel.track('Start Lesson', {"Lesson": "Introduction to Web3", "Course":"Web3 Development"});
  },[]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide < props.slides.getTotalSlides() +1 ? prevCurrentSlide +1 : props.slides.getTotalSlides()+1);
    if(currentSlide == props.slides.getTotalSlides()) {
      mixpanel.track('End Lesson', {"Lesson": "Introduction to Web3", "Course":"Web3 Development"});
    }
  };

  const previousSlide = () => {
    setCurrentSlide((prevCurrentSlide:any) => prevCurrentSlide > 0 ? prevCurrentSlide - 1: 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  },[currentSlide]);

  let percentageDone = currentSlide/(props.slides.getTotalSlides()+1)*100

  return (
    <div className="bg-primary-100">
      <div className='flex flex-row justify-center content-end h-20 w-full border-b-4 fixed top-0 bg-white z-50'>
        <ProgressBar nextSlide={nextSlide} previousSlide={previousSlide} percentageDone={percentageDone}></ProgressBar>
      </div>
      <div className="max-w-md mx-auto mt-10">
        <DisplaySlides slides={props.slides} redirect={props.redirect} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} nextSlide={nextSlide}></DisplaySlides>
      </div> 
    </div>
  );
};

export default Lesson;