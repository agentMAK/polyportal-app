import React, { createRef } from "react";

class Slides {
  slidesArray: Array<any>
  refs:React.RefObject<any>
  startSlide:JSX.Element;
  endSlide: JSX.Element;

  constructor() {
    this.slidesArray = []
    this.refs = createRef();
    this.startSlide = <></>
    this.endSlide = <></>
  }
 
  addSlide(slide:JSX.Element) {
    this.slidesArray.push({
      key: this.slidesArray.length,
      value: {
        content: slide,
        ref: createRef(),
      },
    });
  }

  getSlides() {
    return this.slidesArray
  }

  setStartSlide(slide:JSX.Element) {
    this.startSlide = slide
  }

  setEndSlide(slide:JSX.Element) {
    this.endSlide = slide
  }

  getStartSlide() {
    return this.startSlide
  }

  getEndSlide() {
    return this.endSlide
  }

  getSlide(index:number){
    return this.slidesArray[index].value.content
  }

  getRef(index:number) {
    return this.slidesArray[index].value.ref
  }

  getTotalSlides() {
    return this.slidesArray.length
  }
}


export default Slides
