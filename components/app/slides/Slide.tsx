import React, { createRef } from "react";

class Slide {
  slidesArray: Array<any>
  refs:React.RefObject<any>

  constructor() {
    this.slidesArray = []
    this.refs = createRef();
  }
 
  addCard(slide:JSX.Element) {
    this.slidesArray.push({
      key: this.slidesArray.length,
      value: {
        content: slide,
        ref: createRef(),
      },
    });
  }

  getCards() {
    return this.slidesArray
  }

  getCard(index:number){
    return this.slidesArray[index].value.content
  }

  getRef(index:number) {
    return this.slidesArray[index].value.ref
  }

  getTotalCards() {
    return this.slidesArray.length
  }
}


export default Slide
