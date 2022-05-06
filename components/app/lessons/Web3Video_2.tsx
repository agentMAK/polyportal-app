import TextBlock from "../content-blocks/TextBlock";
import web3start from "../../../public/images/learn/web3/what-is-web3/web3start.png";
import ImageBlock from "../content-blocks/ImageBlock";
import HeaderBlock from "../content-blocks/HeaderBlock";
import SlideContent from "../SlideContent";
import Slides from "../Slides";
import VimeoBlock from "../content-blocks/VimeoBlock";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
      <HeaderBlock>Why Polygon?</HeaderBlock>
      <TextBlock>
        In this lesson, we’ll learn about how Polygon works and the advantages of using the Polygon network.
      </TextBlock>
      <ImageBlock image={web3start}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Why Polygon? - Video</HeaderBlock>
      <VimeoBlock id="706900963"></VimeoBlock>
    </SlideContent>
  );

  slides.setEndSlide(
    <SlideContent>
      <HeaderBlock>Lesson Completed</HeaderBlock>
      <TextBlock>Well done for the completed this lesson</TextBlock>
      <ImageBlock image={web3start}></ImageBlock>
    </SlideContent>
  );

  return slides;
};

export default ContentSlides;
