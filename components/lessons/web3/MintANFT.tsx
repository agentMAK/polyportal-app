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
  let slides = new Slides("Create a Web3 Wallet", 5);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Mint a NFT</HeaderBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>What is a NFT?</HeaderBlock>
      <TextBlock>
      NFTs are digital tokens that we can use to represent ownership of unique items. Ownership of the NFT is recorded on the blockchain
      </TextBlock>
      <TextBlock>NFTs can be art, collectables, in-game items and more.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>
      Types of NFTs
      </HeaderBlock>
      <TextBlock>Let&#39;s explore some of the different types of NFTs</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Digital Collectables</SubHeaderBlock>
      <TextBlock>Collectables are sets of NFTs that each have unique traits.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>In-game NFTs</SubHeaderBlock>
      <TextBlock>In-game NFTs enable gamers to purchase and own in-game assets as NFTs.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Membership NFTs</SubHeaderBlock>
      <TextBlock>Membership NFTs enable members to be part of the community and unlock access to events, content and experiences</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>Mint a NFT</HeaderBlock>
      <TextBlock>
      Let&#39;s go ahead and mint your first free NFT. To do this, we&#39;ll be using mintnft.today
      </TextBlock>
      <SubHeaderBlock><LinkBlock link="https://mintnft.today">Mintnft.today</LinkBlock></SubHeaderBlock>
    </SlideContent>
  );


  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>Congraduations</HeaderBlock>
      <TextBlock>You&#39;ve completed our intro portal to Web3</TextBlock>
    </SlideContent>
  );

  return slides;
};

export default ContentSlides;
