import styled from "@emotion/styled";
import React from "react";
import Button from "../../main/Button";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {
  let button: any = (
    <div className="w-full flex justify-end">
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
  );

  if (props.isStart) {
    button = (
      <div className="w-full flex justify-center">
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
    );
  }

  if (props.isEnd) {
    button = (
      <div className="w-full flex justify-center">
        {" "}
        <Button size="m" variant="dark" link={props.redirect}>
          End Lesson
        </Button>
      </div>
    );
  }

  return (
    <>
      {props.isCurrent ? (
        <SlideScreenBlock ref={ref}>
          {props.children}
          {props.displayButton ? button : null}
          <br />
          <br />
        </SlideScreenBlock>
      ) : (
        <SlideBlock ref={ref}>
          {props.children}
          {props.displayButton ? button : null}
          <br />
          <br />
        </SlideBlock>
      )}
    </>
  );
});

export default Slide;

Slide.defaultProps = {
  isStart: false,
  isEnd: false,
  displayButton: true,
  isCurrent:false
};

const SlideScreenBlock = styled.div`
  width: 100%;
  padding-top: 20px;
  height: calc(100vh - 80px);
`;

const SlideBlock = styled.div`
  width: 100%;
  padding-top: 20px;
  height: 100%;
`;