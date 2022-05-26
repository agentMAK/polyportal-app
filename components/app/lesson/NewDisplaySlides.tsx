import { useEffect, useState } from "react";
import Slide from "./DisplaySlide";

const DisplaySlides = (props: any) => {

  const [currentCard, setCurrentCard] = useState<number>(0);
  
  useEffect(() => {
    setCurrentCard(0)
  },[props.currentSlide]);

  useEffect(() => {
    if(currentCard < props.slide.getTotalCards()) {
      const ref:any = props.slide.getRef(currentCard).current;
      ref.scrollIntoView({ behavior: "smooth" })
    }
  },[currentCard, props.slide]);


  const nextCard = () => {
    setCurrentCard((prevCard:number) => prevCard < props.slide.getTotalCards()-1 ? prevCard + 1 : props.slide.getTotalCards()-1)
  };

  const previousCard = () => {
    setCurrentCard((prevCard:any) => prevCard > 0 ? prevCard - 1: 0);
  };

  const isCurrent = (index:number) => {
    return index === currentCard
  }

  let slides = []

  for (let i =  0; i < currentCard+1 ; i++) {
    let lastCard = props.slide.getTotalCards()-1

    if(i < lastCard) {
      slides.push({key:i, value:<Slide displayButton={isCurrent(i)} nextSlide={nextCard} ref={(el:any) => props.slide.getRef(i).current = el} > {props.slide.getCard(i)} </Slide>})
     } else if (i === lastCard){
       if(props.totalSlides-1 != props.currentSlide) {
        slides.push({key:lastCard, value:<Slide nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} > {props.slide.getCard(lastCard)} </Slide>})
       } else {
        slides.push({key:lastCard, value:<Slide isEnd={true} redirect={props.redirect} nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} > {props.slide.getCard(lastCard)} </Slide>})
       }
      
     }
    }

  console.log(slides)
   
   return (
    <div>
          {slides.map(slide => slide.value)}
    </div>
  );
};

export default DisplaySlides;
