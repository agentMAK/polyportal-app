import React from "react"
import HomeButton from "../elements/HomeButton";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props:any, ref:any) => {
  return (
    <div className="w-full min-h-[900px]" ref={ref}>
      {props.children}
      {props.isFocus(props.slideNo) ? <div className="w-full flex justify-center"> <HomeButton size='m' variant='dark' onClick={() => {props.nextSlide()}}>Continue</HomeButton> </div>: null}
      <br /><br />
    </div>
  )
});

export default Slide
