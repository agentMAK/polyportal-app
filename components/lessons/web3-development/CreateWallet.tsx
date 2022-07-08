import TextBlock from "../../app/content-blocks/TextBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import ListBlock from "../../app/content-blocks/ListBlock";
import Slides from "../../app/slides/Slides";
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import sampleProject from '../../../public/images/lessons/deploy-hardhat/sampleProject.png'
import LinkBlock from "../../app/content-blocks/LinkBlock";


const ContentSlides = () => {
  let slides = new Slides("Create a Web3 Wallet",6);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Create a Web3 wallet </HeaderBlock>
      <TextBlock>
      In this lesson, we&apos;ll teach you how to:
      </TextBlock>
      <ListBlock>
        <li>All about the Polygon Blockchain</li> 
        <li>How to create your very own web3 wallet</li>
        <li>How to use a web3 wallet</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>Let’s start by introducing you to the world of Polygon.</HeaderBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <TextBlock>Polygon is layer2 blockchain built on Ethereum. Polygon makes improvement to the Ethereum blockchain to enables:</TextBlock>
      <ListBlock>
        <li>Lower Fees</li> 
        <li>Faster Transactions</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
       <SubHeaderBlock>
        On Polygon, you’ve got access to most popular apps in web3
        </SubHeaderBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <TextBlock>We&apos;re going to create a wallet that connects to the Polygon blockchain network</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>Create a web3 wallet</HeaderBlock>
      <TextBlock>To start interacting with web3 apps, we need a web3 wallet.</TextBlock>
      <TextBlock>We&apos;ll be using a creating your web3 wallet using a browser extension called Metamask.</TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  ,{layout:'screen'});




  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Installing MetaMask</SubHeaderBlock>
      <TextBlock>
      To install MetaMask, <LinkBlock link="https://www.youtube.com/watch?time_continue=20&v=GNPz-Dv5BjM&feature=emb_title">follow this video tutorial</LinkBlock>
      </TextBlock>
      <SubHeaderBlock><LinkBlock link="https://metamask.io/download/">Download MetaMask</LinkBlock></SubHeaderBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>How to use MetaMask</HeaderBlock>
      <TextBlock>
        To open MetaMask, click the MetaMask icon in the extention bar.
      </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>The first thing you&apos;ll notice is the network. This is currently connected the Ethereum Mainnet. </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>

    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>
        Your wallet has a public wallet address. This enables other to send crypto to your wallet.
      </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>
      You&apos;ll also notice the account balance. This tell you how much ETH is currently in your wallet. You’re is proabably at zero. 😂
      </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
      <TextBlock>It&apos;s also show you what the equates to USD.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>Connecting to the Polygon Network</HeaderBlock>
      <TextBlock>
      To connect the Polygon network, we need to add it metamask. It doesn&apos;t come built in.
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>
        To do this we&apos;ll got the Polygon website. Polygon.technology
      </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
    <TextBlock>
      Once added, you can go ahead and switch to the Polygon network
    </TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>You&apos;ll noticed that your officially connected to the Polygon Network</TextBlock>
      <ImageBlock image={sampleProject}></ImageBlock>
    </SlideContent>
  );


  slides.getSlide(5).addCard(
    <SlideContent>
      <HeaderBlock>You&apos;re sucessfully created a web3 wallet</HeaderBlock>
      <TextBlock>Now let&apos;s start using this wallet.</TextBlock>
    </SlideContent>
  );





  return slides;
};



export default ContentSlides;
