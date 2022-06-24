import React, { createRef } from "react";

class Cards {
  cardsArray: Array<any>
  refs:React.RefObject<any>

  constructor() {
    this.cardsArray = []
    this.refs = createRef();
  }

  defaultConfig = {
    layout: 'auto'
  }
 
  addCard(slide:JSX.Element, config:any = this.defaultConfig) {
    this.cardsArray.push({
      key: this.cardsArray.length,
      value: {
        content: slide,
        ref: createRef(),
        config: config
      },
    });
  }

  getCards() {
    return this.cardsArray
  }

  getCard(index:number){
    return this.cardsArray[index].value.content
  }

  getRef(index:number) {
    return this.cardsArray[index].value.ref
  }

  getTotalCards() {
    return this.cardsArray.length
  }

  getConfig(index:number) {
    return this.cardsArray[index].value.config
  }
}


export default Cards
