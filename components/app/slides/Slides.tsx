import Slide from "./Slide";

class Slides {
  slidesArray: Array<any>

  constructor(totalSlides:number) {
    this.slidesArray = []
    for (let i =  0; i < totalSlides ; i++) {
      this.slidesArray.push({
        key: this.slidesArray.length,
        value: new Slide(),
      });
    }
  } 

  getSlide(index:any) : Slide {
    return this.slidesArray[index].value
  }

  getTotalSlides() {
    return this.slidesArray.length
  }
}


export default Slides
