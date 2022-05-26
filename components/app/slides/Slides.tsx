import Cards from "./Cards";

class Slides {
  slidesArray: Array<any>

  constructor(totalSlides:number) {
    this.slidesArray = []
    for (let i =  0; i < totalSlides ; i++) {
      this.slidesArray.push({
        key: this.slidesArray.length,
        value: new Cards(),
      });
    }
  } 

  getSlide(index:any) : Cards {
    return this.slidesArray[index].value
  }

  getTotalSlides() {
    return this.slidesArray.length
  }
}


export default Slides
