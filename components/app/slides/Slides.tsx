import Cards from "./Cards";

class Slides {
  slidesArray: Array<any>
  title:String

  constructor(title:String,totalSlides:number) {
    this.slidesArray = []
    this.title = title
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

  getTitle() {
    return this.title
  }
}


export default Slides
