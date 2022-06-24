import React, { useEffect, useState } from "react";
import ShowConfetti from "../animations/ShowConfetti";
import CardBlock from "./CardBlock";
import CardButton from "./CardButton";

// eslint-disable-next-line react/display-name
const Slide = React.forwardRef((props: any, ref: any) => {
  const [confettiToggle, setConfettiToggle] = useState<boolean>(false);

  let layout = props.config.layout;
  let button: any = <CardButton onClick={props.nextSlide} />;

  // Auto Configurations
  if (layout === "auto") {
    if (props.status === "start") {
      layout = "screen";
    } else if (props.status === "end") {
      layout = "focus";
      if (!confettiToggle) {
        ShowConfetti();
        setConfettiToggle(true);
      }
    }
  }

  if (layout === "focus") {
    button = (
      <CardButton
        onClick={props.nextSlide}
        layout="center"
        status={props.status}
        redirect={props.redirect}
      />
    );
  }

  return (
    <CardBlock ref={ref} layout={layout} isCurrent={props.isCurrent}>
      {props.children}
      {props.isCurrent ? button : null}
      <br />
    </CardBlock>
  );
});

export default Slide;

Slide.defaultProps = {
  isStart: false,
  isEnd: false,
  displayButton: true,
  isCurrent: false,
};