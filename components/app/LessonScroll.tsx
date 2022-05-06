import React, { useEffect, useState } from "react";
import Slide from "./Slide";




const LessonScroll = (props: any) => {

  const refArray = props.refs

  const [focusSlide, setFocusSlide] = useState(0);
  
  useEffect(() => {
    const ref:any = props.slides.getRef(focusSlide).current;
    focusSlide > 0 ? ref.scrollIntoView({ behavior: "smooth" }) : null;
  },[focusSlide, props.slides]);

  const nextSlide = () => {
    setFocusSlide((prevFocusSlide:any) => prevFocusSlide +1);
  };


  const isFocus = (slideNo: number) => {
    return focusSlide == slideNo ? true : false
  }

  let slides = [{key:99, value:<Slide isStart={true} nextSlide={nextSlide} ref={(el:any) => props.slides.getRef(1).current = el} slideNo={0} isFocus={isFocus}> {props.slides.getSlide(0)} </Slide>}];
  for (let i =  1; i < focusSlide +1 ; i++) {
    slides.push({key:i, value:<Slide nextSlide={nextSlide} ref={(el:any) => props.slides.getRef(i).current = el} slideNo={i} isFocus={isFocus}> {props.slides.getSlide(i)} </Slide>})
  }

  return (
    <div>
          {slides.map(a => a.value)}
    </div>
  );
};

export default LessonScroll;
