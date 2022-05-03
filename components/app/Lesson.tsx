import React, { useState } from "react";
import Slide from "./Slide";

const LessonTest = (props: any) => {

  const [focusSlide, setFocusSlide] = useState(0);

  const nextSlide = () => {
    setFocusSlide((prevFocusSlide:any) => prevFocusSlide +1);
  };

  let slides = [{key:0, value:<Slide isStart={true} nextSlide={nextSlide} ref={(el:any) => props.slides.getRef(1).current = el}> {props.slides.getStartSlide()} </Slide>}];
  for (let i =  1; i < props.slides.getSlidesNo() ; i++) {
     slides.push({key:i, value:<Slide nextSlide={nextSlide} ref={(el:any) => props.slides.getRef(i).current = el} > {props.slides.getSlide(i)} </Slide>})
   }
   slides.push({key:slides.length, value:<Slide isEnd={true} redirect={props.redirect} nextSlide={nextSlide} ref={(el:any) => props.slides.getRef(1).current = el}> {props.slides.getEndSlide()} </Slide>})

  return (
    <div>
          {slides[focusSlide].value}
    </div>
  );
};

export default LessonTest;
