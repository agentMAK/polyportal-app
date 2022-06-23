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
      </Button>
    </div>
  );

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
