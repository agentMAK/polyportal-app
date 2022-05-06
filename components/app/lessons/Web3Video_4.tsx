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
      <HeaderBlock>Core ideas of Web3</HeaderBlock>
      <TextBlock>
        In this lesson, we’ll discover the core ideas that Web3 is built on and the technologies the enable it
      </TextBlock>
      <ImageBlock image={web3start}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Core ideas of Web3 - Video</HeaderBlock>
      <VimeoBlock id="706908689"></VimeoBlock>
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
