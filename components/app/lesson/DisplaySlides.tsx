import DisplaySlide from "./DisplaySlide";

const DisplaySlides = (props: any) => {
  let slides = [
    {
      key: 0,
      value: (
        <DisplaySlide isStart={true} nextSlide={props.nextSlide}>
          {" "}
          {props.slides.getStartSlide()}{" "}
        </DisplaySlide>
      ),
    },
  ];

  for (let i = 0; i < props.slides.getTotalSlides(); i++) {
    slides.push({
      key: i + 1,
      value: (
        <DisplaySlide
          nextSlide={props.nextSlide}
          ref={(el: any) => (props.slides.getRef(i).current = el)}
        >
          {" "}
          {props.slides.getSlide(i)}{" "}
        </DisplaySlide>
      ),
    });
  }
  slides.push({
    key: slides.length + 1,
    value: (
      <DisplaySlide
        isEnd={true}
        redirect={props.redirect}
        nextSlide={props.nextSlide}
      >
        {" "}
        {props.slides.getEndSlide()}{" "}
      </DisplaySlide>
    ),
  });
  return <div>{slides[props.currentSlide].value}</div>;
};

export default DisplaySlides;
