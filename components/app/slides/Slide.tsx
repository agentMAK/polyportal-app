import React from "react";
import Button from "../../main/Button";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {

  let button:any = <div className="w-full flex justify-end">
      {" "}
      <Button
        size="m"
        variant="dark"
        onClick={() => {
          props.nextSlide();
        }}
      >
        Continue
      </Button>{" "}
    </div>
  
  if(props.isStart) {
    button = <div className="w-full flex justify-center">
    {" "}
    <Button
      size="m"
      variant="dark"
      onClick={() => {
        props.nextSlide();
      }}
    >
      Start Lesson
    </Button>{" "}
  </div>
  }

  if(props.isEnd) {
    button = <div className="w-full flex justify-center">
    {" "}
    <Button
      size="m"
      variant="dark"
      link={props.redirect}
    >
      End Lesson
    </Button>
  </div>
  }

  return (
    <div className="w-full min-h-[700px]" ref={ref}>
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
