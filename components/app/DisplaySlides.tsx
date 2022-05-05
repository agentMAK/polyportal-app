import React, { useState } from "react";
import Slide from "./Slide";

const DisplaySlides = (props: any) => {

  let slides = [{key:0, value:<Slide isStart={true} nextSlide={props.nextSlide} ref={(el:any) => props.slides.getRef(1).current = el}> {props.slides.getStartSlide()} </Slide>}];
  for (let i =  1; i < props.slides.getTotalSlides() ; i++) {
     slides.push({key:i, value:<Slide nextSlide={props.nextSlide} ref={(el:any) => props.slides.getRef(i).current = el} > {props.slides.getSlide(i)} </Slide>})
   }
   slides.push({key:slides.length, value:<Slide isEnd={true} redirect={props.redirect} nextSlide={props.nextSlide} ref={(el:any) => props.slides.getRef(1).current = el}> {props.slides.getEndSlide()} </Slide>})
  return (
    <div>
          {slides[props.currentSlide].value}
    </div>
  );
};

export default DisplaySlides;
