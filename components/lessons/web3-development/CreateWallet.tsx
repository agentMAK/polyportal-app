import TextBlock from "../../app/content-blocks/TextBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import ListBlock from "../../app/content-blocks/ListBlock";
import Slides from "../../app/slides/Slides";
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import polygon from "../../../public/images/lessons/create-wallet/polygon.png";
import polygondapps from "../../../public/images/lessons/create-wallet/polygondapps.png";
import metamask from "../../../public/images/lessons/create-wallet/MetaMask.png";
import metamaskBanner from "../../../public/images/lessons/create-wallet/metamaskBanner.png";
import openMetamask from "../../../public/images/lessons/create-wallet/openMetamask.png";
import network from "../../../public/images/lessons/create-wallet/network.png";
import amount from "../../../public/images/lessons/create-wallet/amount.png";
import address from "../../../public/images/lessons/create-wallet/address.png";
import polygonAdd from "../../../public/images/lessons/create-wallet/polygonadd.png";
import polygonApprove from "../../../public/images/lessons/create-wallet/polygonapprove.png";
import polygonConnected from "../../../public/images/lessons/create-wallet/polygonconnected.png";
import polygonSwitch from "../../../public/images/lessons/create-wallet/polygonswitch.png";
import LinkBlock from "../../app/content-blocks/LinkBlock";
import Bold from "../../app/content-blocks/Bold";

const ContentSlides = () => {
  let slides = new Slides("Create a Web3 Wallet", 6);

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Create a Web3 wallet </HeaderBlock>
      <TextBlock>In this lesson, we&apos;ll teach you:</TextBlock>
      <ListBlock>
        <li>All about the Polygon Blockchain</li>
        <li>How to create your very own web3 wallet</li>
        <li>How to use a web3 wallet</li>
      </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>
        Let&apos;s start by introducing you to the world of Polygon.
      </HeaderBlock>
      <ImageBlock image={polygon}></ImageBlock>
    </SlideContent>,
    { layout: "focus" }
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <TextBlock>Polygon is layer2 blockchain built on Ethereum. </TextBlock>
      <TextBlock>
        Polygon makes improvement to the Ethereum blockchain by enabling:
      </TextBlock>
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
      <ImageBlock image={polygondapps}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>
        We&apos;re going to create a <Bold>wallet</Bold> that connects to the{" "}
        <Bold>Polygon blockchain</Bold> network...
      </SubHeaderBlock>
    </SlideContent>,
    { layout: "screen" }
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>Create a web3 wallet</HeaderBlock>
      <TextBlock>
        To start interacting with web3 apps, we need a web3 wallet. We&apos;ll
        be using a browser extension called <Bold>Metamask.</Bold>
      </TextBlock>
      <ImageBlock image={metamaskBanner}></ImageBlock>
    </SlideContent>,
    { layout: "screen" }
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <SubHeaderBlock>Installing MetaMask</SubHeaderBlock>
      <TextBlock>
        To install MetaMask,{" "}
        <LinkBlock link="https://www.youtube.com/watch?time_continue=20&v=GNPz-Dv5BjM&feature=emb_title">
          follow this video tutorial
        </LinkBlock>
      </TextBlock>
      <ImageBlock image={metamask}></ImageBlock>
      <SubHeaderBlock>
        <LinkBlock link="https://metamask.io/download/">
          Download MetaMask
        </LinkBlock>
      </SubHeaderBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>How to use MetaMask</HeaderBlock>
      <TextBlock>
        To open MetaMask, click the MetaMask icon in the extention bar.
      </TextBlock>
      <ImageBlock image={openMetamask}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>
        The first thing you&apos;ll notice is the network. This is currently
        connected the Ethereum Mainnet.{" "}
      </TextBlock>
      <ImageBlock image={network}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>
        Your wallet has a public wallet address. This enables other to send
        crypto to your wallet.
      </TextBlock>
      <ImageBlock image={address}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <TextBlock>
        You&apos;ll also notice the account balance. This tell you how much ETH
        is currently in your wallet. You&apos;re is probably at zero. 😂
      </TextBlock>
      <ImageBlock image={amount}></ImageBlock>
      <TextBlock>It&apos;s also show you what the equates to USD.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>Connecting to the Polygon Network</HeaderBlock>
      <TextBlock>
        To connect the Polygon network, we need to add it metamask. It
        doesn&apos;t come built in.
      </TextBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>
        To do this we&apos;ll got to go to the Polygon website.{" "}
        <LinkBlock link="https://polygon.technology/">
          Polygon.technology.{" "}
        </LinkBlock>
      </TextBlock>
      <TextBlock>
      <Bold>Click &apos; Add Polygon PoS Network to Metamask&apos;</Bold>
      </TextBlock>
      <ImageBlock image={polygonAdd}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>
        This will prompt you to add Polygon to your metamask wallet
      </TextBlock>
      <ImageBlock image={polygonApprove}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>
        Once added, you can go ahead and switch to the Polygon network
      </TextBlock>
      <ImageBlock image={polygonSwitch}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(4).addCard(
    <SlideContent>
      <TextBlock>
        You&apos;ll noticed that your officially connected to the Polygon
        Network
      </TextBlock>
      <ImageBlock image={polygonConnected}></ImageBlock>
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
