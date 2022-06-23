import { useEffect, useState } from "react";
import Slide from "./DisplaySlide";

const DisplaySlides = (props: any) => {

  const [currentCard, setCurrentCard] = useState<number>(0);
  const lastCard = props.slide.getTotalCards()-1

  
  useEffect(() => {
    setCurrentCard(0)
  },[props.currentSlide]);

  useEffect(() => {
    if(currentCard < props.slide.getTotalCards() && currentCard != 0) {
      const ref:any = props.slide.getRef(currentCard).current;
      ref.scrollIntoView({ behavior: "smooth" })
    }
  },[currentCard, props.slide]);


  const nextCard = () => {
    setCurrentCard((prevCard:number) => prevCard < lastCard ? prevCard + 1 : lastCard)
  };

  const previousCard = () => {
    setCurrentCard((prevCard:any) => prevCard > 0 ? prevCard - 1: 0);
  };

  const isCurrent = (index:number) => {
    return index === currentCard
  }

  let slides = [{key:0, value:<Slide status='start' isCurrent={isCurrent(0)} displayButton={isCurrent(0)} nextSlide={nextCard} ref={(el:any) => props.slide.getRef(0).current = el} config={props.slide.getConfig(0)}> {props.slide.getCard(0)} </Slide>}]


  if(props.slide.getTotalCards() === 1) {

    if(props.totalSlides-1 != props.currentSlide) {
      slides = [{key:lastCard, value:<Slide status='start' config={props.slide.getConfig(lastCard)} isCurrent={true} nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} > {props.slide.getCard(lastCard)} </Slide>}]
      } else {
        slides = [{key:lastCard, value:<Slide status='end' config={props.slide.getConfig(lastCard)} isCurrent={true} redirect={props.redirect} nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} > {props.slide.getCard(lastCard)} </Slide>}]
     }
    }

  for (let i =  1; i < currentCard+1 ; i++) {

    if(i < lastCard) {
      slides.push({key:i, value:<Slide isCurrent={isCurrent(i)} displayButton={isCurrent(i)} nextSlide={nextCard} ref={(el:any) => props.slide.getRef(i).current = el}  config={props.slide.getConfig(i)}> {props.slide.getCard(i)} </Slide>})
     } else if (i === lastCard){
       if(props.totalSlides-1 != props.currentSlide) {
        slides.push({key:lastCard, value:<Slide isCurrent={true} nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} config={props.slide.getConfig(lastCard)}> {props.slide.getCard(lastCard)} </Slide>})
       } else {
        slides.push({key:lastCard, value:<Slide status='end' isCurrent={true} redirect={props.redirect} nextSlide={props.nextSlide} ref={(el:any) => props.slide.getRef(lastCard).current = el} config={props.slide.getConfig(lastCard)}> {props.slide.getCard(lastCard)} </Slide>})
       }
      
     }
    }
   
   return (
    <div>
          {slides.map(slide => slide.value)}
    </div>
  );
};

export default DisplaySlides;
