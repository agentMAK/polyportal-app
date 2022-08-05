import TextBlock from "../../app/content-blocks/TextBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import Slides from "../../app/slides/Slides";
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import metamask from "../../../public/images/lessons/create-wallet/MetaMask.png";
import metamaskBanner from "../../../public/images/lessons/create-wallet/metamaskBanner.png";
import openMetamask from "../../../public/images/lessons/create-wallet/openMetamask.png";
import LinkBlock from "../../app/content-blocks/LinkBlock";

const ContentSlides = () => {
  let slides = new Slides("Create a Web3 Wallet", 4);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Create a Web3 wallet </HeaderBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>What is a Web3 wallet?</HeaderBlock>
      <TextBlock>
      A Web3 wallet enables you to send crypto and interact web3 applications
      </TextBlock>
      <TextBlock>It&#39;s a home to store all your cryptocurrencies, tokens and NFTs</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>
        Metamask
      </HeaderBlock>
      <TextBlock>MetaMask is currently the most popular web3 wallet available. </TextBlock>
      <ImageBlock image={metamaskBanner}></ImageBlock>
      <TextBlock>Let&#39;s use this to create your first web3 wallet </TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Install MetaMask</SubHeaderBlock>
      <TextBlock>
        Follow the tutorial below to install the MetaMask browser extension. It only takes a few seconds.
      </TextBlock>
      <LinkBlock link="https://www.youtube.com/watch?time_continue=20&v=GNPz-Dv5BjM&feature=emb_title"><ImageBlock image={metamask}></ImageBlock></LinkBlock>
      <SubHeaderBlock>
        <LinkBlock link="https://metamask.io/download/">
          Download MetaMask
        </LinkBlock>
      </SubHeaderBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <TextBlock>
        Once successfully installed, it should look like this:
      </TextBlock>
      <ImageBlock image={openMetamask}></ImageBlock>
    </SlideContent>
  );


  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>Congraduations</HeaderBlock>
      <TextBlock>Let&apos;s mint your first NFT</TextBlock>
    </SlideContent>
  );

  return slides;
};

export default ContentSlides;
