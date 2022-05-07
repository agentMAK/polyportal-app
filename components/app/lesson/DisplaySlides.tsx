import Slide from "../slides/Slide";

const DisplaySlides = (props: any) => {

  let slides = [{key:0, value:<Slide isStart={true} nextSlide={props.nextSlide}> {props.slides.getStartSlide()} </Slide>}];

  for (let i =  0; i < props.slides.getTotalSlides() ; i++) {
     slides.push({key:i+1, value:<Slide nextSlide={props.nextSlide} ref={(el:any) => props.slides.getRef(i).current = el} > {props.slides.getSlide(i)} </Slide>})
   }
   slides.push({key:slides.length+1, value:<Slide isEnd={true} redirect={props.redirect} nextSlide={props.nextSlide}> {props.slides.getEndSlide()} </Slide>})
   return (
    <div>
          {slides[props.currentSlide].value}
    </div>
  );
};

export default DisplaySlides;
