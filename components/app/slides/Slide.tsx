import React, { createRef } from "react";

class Slide {
  slidesArray: Array<any>
  refs:React.RefObject<any>

  constructor() {
    this.slidesArray = []
    this.refs = createRef();
  }

  defaultConfig = {
    layout: 'auto'
  }
 
  addCard(slide:JSX.Element, config:any = this.defaultConfig) {
    this.slidesArray.push({
      key: this.slidesArray.length,
      value: {
        content: slide,
        ref: createRef(),
        config: config
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

  getConfig(index:number) {
    return this.slidesArray[index].value.config
  }
}


export default Slide
