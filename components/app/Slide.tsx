import Link from "next/link";
import React from "react";
import Button from "../elements/Button";
import HomeButton from "../elements/HomeButton";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {

  let button:any = <div className="w-full flex justify-end">
      {" "}
      <HomeButton
        size="m"
        variant="dark"
        onClick={() => {
          props.nextSlide();
        }}
      >
        Continue
      </HomeButton>{" "}
    </div>
  
  if(props.isStart) {
    button = <div className="w-full flex justify-center">
    {" "}
    <HomeButton
      size="m"
      variant="dark"
      onClick={() => {
        props.nextSlide();
      }}
    >
      Start Lesson
    </HomeButton>{" "}
  </div>
  }

  if(props.isEnd) {
    button = <div className="w-full flex justify-center">
    {" "}
    <HomeButton
      size="m"
      variant="dark"
      link={props.redirect}
    >
      End Lesson
    </HomeButton>
  </div>
  }

  return (
    <div className="w-full min-h-[900px]" ref={ref}>
      {props.children}
      {button}
      <br />
      <br />
    </div>
  );
});

export default Slide;

Slide.defaultProps = {
  isStart:false,
  isEnd:false,
}
