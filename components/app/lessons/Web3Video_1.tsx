import TextBlock from "../content-blocks/TextBlock";
import web3start from "../../../public/images/learn/web3/what-is-web3/web3start.png";
import web3 from "../../../public/images/learn/web3/exploring-web3/web3apps.png";
import uniswap from "../../../public/images/learn/web3/exploring-web3/uniswap.svg";
import pooltogether from "../../../public/images/learn/web3/exploring-web3/pooltogether.webp";
import opensea from "../../../public/images/learn/web3/exploring-web3/opensea.png";
import aave from "../../../public/images/learn/web3/exploring-web3/aave.png";
import ImageBlock from "../content-blocks/ImageBlock";
import HeaderBlock from "../content-blocks/HeaderBlock";
import SlideContent from "../SlideContent";
import Slides from "../Slides";
import VimeoBlock from "../content-blocks/VimeoBlock";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
      <HeaderBlock>Introduction to Web3</HeaderBlock>
      <TextBlock>
        In this lesson, we’ll give you an introduction to the Web3 course material and how to navigate the course.
      </TextBlock>
      <ImageBlock image={web3start}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Introduction to Web3 - Video</HeaderBlock>
      <VimeoBlock id="706877274"></VimeoBlock>
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
