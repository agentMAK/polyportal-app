import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "../../main/Button";
import ShowConfetti from "../animations/ShowConfetti";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {
  const [confettiToggle, setConfettiToggle] = useState<boolean>(false);

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
    return (
      <SlideIntro ref={ref}>
        {props.children}
        {props.displayButton ? button : null}
        <br />
        <br />
      </SlideIntro>
    );
  }

  if (props.isEnd) {
    if (!confettiToggle) {
      ShowConfetti();
      setConfettiToggle(true);
    }
    button = (
      <div className="w-full flex justify-center">
        {" "}
        <Button size="m" variant="dark" link={props.redirect}>
          End Lesson
        </Button>
      </div>
    );
  }

  if (props.isEnd) {
    return (
      <SlideIntro className="text-center"ref={ref}>
        {props.children}
        {props.displayButton ? button : null}
        <br />
        <br />
      </SlideIntro>
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
  isCurrent: false,
};

const SlideScreenBlock = styled.div`
  width: 100%;
  padding-top: 20px;
  height: calc(100vh - 80px);
`;

const SlideIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  height: calc(100vh - 80px);
`;

const SlideBlock = styled.div`
  width: 100%;
  padding-top: 20px;
  height: 100%;
`;
