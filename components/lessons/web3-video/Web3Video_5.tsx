import TextBlock from "../../app/content-blocks/TextBlock";
import web3start from "../../../public/images/lessons/web3-video/web3guide.png"
import ImageBlock from "../../app/content-blocks/ImageBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import Slides from "../../app/slides/Slides";
import VimeoBlock from "../../app/content-blocks/VimeoBlock";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
      <HeaderBlock>NFTs and Tokens</HeaderBlock>
      <TextBlock>
        In this lesson, we’ll learn about DApps, NFTs and tokens that make up the Web3 space and the use cases these have. </TextBlock>
      <ImageBlock image={web3start}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>NFTs and Tokens - Video</HeaderBlock>
      <VimeoBlock id="706908983"></VimeoBlock>
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
