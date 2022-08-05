import TextBlock from "../../app/content-blocks/TextBlock";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import facebook from "../../../public/images/lessons/web3-developement/facebook.png"
import netscape from "../../../public/images/lessons/web3-developement/netscape.png"
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import Slides from "../../app/slides/Slides";

const ContentSlides = () => {
  
  let slides = new Slides("Introduction to Web3",5)

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Introduction to Web3</HeaderBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>Blockchain</HeaderBlock>
      <TextBlock>The blockchain is a linked list of transactions stored on a network of computers</TextBlock>
      <TextBlock>Blockchains are decentralised, which means no central actor can control the blockchain.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>Bitcoin</HeaderBlock>
      <TextBlock>Bitcoin was the first cryptocurrency, launched in 2009.</TextBlock>
      <TextBlock>Anyone can send and receive digital money (bitcoins) on the bitcoin network</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>Ethereum</HeaderBlock>
      <TextBlock> Ethereum is the 2nd most popular cryptocurrency</TextBlock>
      <TextBlock>Anyone can send cryptocurrencies and run Web3 applications on the Ethereum network</TextBlock>
    </SlideContent>
  );


  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>What is Web3?</HeaderBlock>
      <TextBlock>Web3 is the next generation of the internet. An decentralised internet.</TextBlock>
      <TextBlock>Let&apos;s break it down.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Web1</SubHeaderBlock>
      <TextBlock>Let&apos;s take a look at the history of the internet. Starting with Web1 </TextBlock>
      <ImageBlock image={netscape}></ImageBlock>
      <TextBlock>Web1 was the read-only internet. This primarily consisted of static websites owned by institutions and companies. Like Yahoo and NetScape</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Web2</SubHeaderBlock>
      <ImageBlock image={facebook}></ImageBlock>
      <TextBlock>Web2 enabled the ability to both read and write on the internet. This introduces interactive web apps and the evolution of user-generated content. Now, anyone in the world could publish content online that could be seen by millions. Like Facebook and Youtube</TextBlock>
    </SlideContent>
  );


  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Introducing Web3</SubHeaderBlock>
      <TextBlock>Web3 is read, write and own. It introduces the ability to truly own digital assets, natively on the internet.</TextBlock>
      <TextBlock>The internet now has digital ownership that doesn&apos;t require users to trust any centralised entity.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>Fundamentals of Web3</HeaderBlock>
      <TextBlock>The building blocks that make up Web3</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>Web3 is decentralisation</SubHeaderBlock>
      <TextBlock>The internet is primarily controlled by a handful of large technology companies.</TextBlock>
      <TextBlock>Web3 is truly decentralised. This means the network cannot be controlled by anyone..</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>Web3 is Ownership</SubHeaderBlock>
      <TextBlock>Web3 allows for direct ownership of digital assets. No one, not even the creators, has the power to take away your ownership.</TextBlock>
    </SlideContent>
  );
  
  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>Web3 is Permissionless</SubHeaderBlock>
      <TextBlock>Web3 has no gatekeepers. Everyone has equal access to participate in Web3, and no one gets excluded. </TextBlock>
    </SlideContent>
  );


  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>Congraduations</HeaderBlock>
      <TextBlock>Let&apos;s create your first web3 wallet</TextBlock>
    </SlideContent>
  );

  return slides;
};

export default ContentSlides;
