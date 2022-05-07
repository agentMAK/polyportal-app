import TextBlock from "../../app/content-blocks/TextBlock";
import web3start from "../../../public/images/lessons/web3/web3guide.png";
import web3 from "../../../public/images/lessons/web3/web3apps.png"
import uniswap from "../../../public/images/lessons/web3/uniswap.svg";
import pooltogether from "../../../public/images/lessons/web3/pooltogether.webp";
import opensea from "../../../public/images/lessons/web3/opensea.png";
import aave from "../../../public/images/lessons/web3/aave.png";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import Slides from "../../app/slides/Slides";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
      <HeaderBlock>Exploring Web3</HeaderBlock>
      <TextBlock>
        There are over 7000+ dApps on Polygon. Let&apos;s explore the most popular web3 apps
      </TextBlock>
      <ImageBlock image={web3}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Uniswap</HeaderBlock>
      <TextBlock>
        Uniswap is a decentralised exchange for trading crypto tokens
      </TextBlock>
      <ImageBlock image={uniswap}></ImageBlock>

      <TextBlock>
        Try it out at: <a
            href="https://app.uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-semibold text-primary hover:underline"
          > www.app.uniswap.org
          </a>
      </TextBlock>
    </SlideContent>
  );
  
  slides.addSlide(
    <SlideContent>
      <HeaderBlock>PoolTogether</HeaderBlock>
      <TextBlock>
      PoolTogether is a service that lets users stake cryptocurrency into lottery pools for a chance to win a significant weekly prize pool.
      </TextBlock>
      <ImageBlock image={pooltogether}></ImageBlock>

      <TextBlock>
        Try it out at: <a
            href="https://app.pooltogether.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-semibold text-primary hover:underline"
          > app.pooltogether.com
          </a>
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>OpenSea</HeaderBlock>
      <TextBlock>
        OpenSea is an NFT marketplace for buying and selling NFTs.
      </TextBlock>
      <ImageBlock image={opensea}></ImageBlock>

      <TextBlock>
        Try it out at: <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-semibold text-primary hover:underline"
          > opensea.io
          </a>
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Aave</HeaderBlock>
      <TextBlock>
        Aave is a DeFi protocol for lending and borrowing cryptocurrencies
      </TextBlock>
      <ImageBlock image={aave}></ImageBlock>

      <TextBlock>
        Try it out at: <a
            href="https://app.aave.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans-semibold text-primary hover:underline"
          > app.aave.com
          </a>
      </TextBlock>
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
