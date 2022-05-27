import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Button from "../../main/Button";
import confetti from "canvas-confetti";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {
  const [confettiToggle, setConfettiToggle] = useState<boolean>(false);

  const showConfetti = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.9 },
    };

    function fire(particleRatio: any, opts: any) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

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
      showConfetti();
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
