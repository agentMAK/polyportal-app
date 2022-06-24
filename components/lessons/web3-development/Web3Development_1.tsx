import TextBlock from "../../app/content-blocks/TextBlock";
import web3start from "../../../public/images/lessons/web3-video/web3guide.png"
import ImageBlock from "../../app/content-blocks/ImageBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import facebook from "../../../public/images/lessons/web3-developement/facebook.png"
import netscape from "../../../public/images/lessons/web3-developement/netscape.png"
import web3developers from "../../../public/images/lessons/web3-developement/web3developers.png"
import web3search from "../../../public/images/lessons/web3-developement/web3search.png"
import web3salaries from "../../../public/images/lessons/web3-developement/web3salaries.png"
import SubHeaderBlock from "../../app/content-blocks/SubHeaderBlock";
import ListBlock from "../../app/content-blocks/ListBlock";
import web3 from "../../../public/images/lessons/web3-developement/web3.png"
import Bold from "../../app/content-blocks/Bold";
import Slides from "../../app/slides/Slides";

const ContentSlides = () => {
  
  let slides = new Slides("Introduction to Web3",5)

  slides.getSlide(0).addCard(
    <SlideContent>
      <HeaderBlock>Introduction to Web3</HeaderBlock>
      <TextBlock>
        In this lesson,
      </TextBlock>
      <ListBlock>
          <li>What is Web3?</li>
          <li>Opportunities in Web3</li>
          <li>How to get started</li>
        </ListBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <HeaderBlock>What is Web3?</HeaderBlock>
      <TextBlock>Web3 is the next generation of the internet. It&apos;s based on decentralization, user ownership, and blockchain technology.</TextBlock>
      <TextBlock>To understand Web3 further, let take a look at each previous evolution of the internet</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Web1</SubHeaderBlock>
      <TextBlock>Web1 was the read only internet. It primarily consisted of static websites owned by institution and companies. </TextBlock>
      <ImageBlock image={netscape}></ImageBlock>
      <TextBlock>The most prolific companies of Web1 include Google, Yahoo, Netscape and AOL.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Web2</SubHeaderBlock>
      <TextBlock>Web2 enabled the ability to both read and write on the internet. This introduces interactive web apps and the evolution of user generated content. Now, anyone in the world could publish content online that could be seen by millions.</TextBlock>
      <ImageBlock image={facebook}></ImageBlock>
      <TextBlock>Facebook was able to leverage user-generated content to create a social media empire. Other big winners from web2 included Twitter, Youtube, Uber and TikTok.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Problems with Web2</SubHeaderBlock>
      <TextBlock>Web2 application centralise both the storage and distribution of content. As great as these companies are, we’re starting to see unintended consequences of web3 applications.</TextBlock>
      <TextBlock><Bold>Misuse of Data</Bold> - Web2’s corporate ownership of our data has lead to privacy breaches and aggressive attention seeking algorithms.</TextBlock>
      <TextBlock><Bold>Censorship</Bold> - Web2 has significant control over what content can exist on the internet</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <SubHeaderBlock>Introducing Web3</SubHeaderBlock>
      <TextBlock>Web3 is read, write and own. It introduces is the ability to truly own digital asset, natively on the internet. This has never been possible before. Thanks to blockchain technologies, the internet now has digital ownership that doesn’t require users to trust any centralised entity.</TextBlock>
      <ImageBlock image={web3}></ImageBlock>
      <TextBlock>In Web3, we are no longer required to delegate our data, content and trust to third-party platforms such as Facebook and Google. Web3 enables true ownership in the sense that no one, not even the builders of the technology, can take this ownership away.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(1).addCard(
    <SlideContent>
      <TextBlock>Key features of web3 are:</TextBlock>
      <SubHeaderBlock>Decentralisation</SubHeaderBlock>
      <SubHeaderBlock>Permissionless</SubHeaderBlock>
      <SubHeaderBlock>User-Owned</SubHeaderBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <HeaderBlock>Opportunities in Web3</HeaderBlock>
      <TextBlock>Let take a look at opportunities in Web3 and demand for Web3 talent.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <ImageBlock image={web3search}></ImageBlock>
      <TextBlock>Web3 is an ever-growing part of the internet. Google Trends data shows searches for Web3 has grown massively in the past few years</TextBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <TextBlock>The number for use cases has expanded significantly as well as gaining mainstream attention.</TextBlock>
      <SubHeaderBlock>NFTs</SubHeaderBlock>
      <SubHeaderBlock>Metaverse</SubHeaderBlock>
      <SubHeaderBlock>DeFi</SubHeaderBlock>
      <SubHeaderBlock>Gaming</SubHeaderBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <TextBlock>In conjunction with the growth of web3, there has been massive growth in demand for Web3 developers. </TextBlock>
      <ImageBlock image={web3developers}></ImageBlock>
    </SlideContent>
  );

  slides.getSlide(2).addCard(
    <SlideContent>
      <TextBlock>Typical salaries for blockchain developer vary based on location and experience. These are average salaries of blockchain developers</TextBlock>
      <ImageBlock image={web3salaries}></ImageBlock>
      <TextBlock>By learning Web3 now, developer can take advantage of the growth in Web3.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <HeaderBlock>How to get started</HeaderBlock>
      <TextBlock>Throughout this course, we’ll help you to start learning Web3 and using Web3 to acceleate you career.</TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>Getting Started Section</SubHeaderBlock>
      <TextBlock>In this section, you’ll learn: 
        <ListBlock>
          <li>Why use Polygon</li>
          <li>What skills you need to know to become a Web3 developer</li>
          <li>Basics of smart contract development</li>
        </ListBlock>
        </TextBlock>
    </SlideContent>
  );

  slides.getSlide(3).addCard(
    <SlideContent>
      <SubHeaderBlock>Start Building Section</SubHeaderBlock>
      <TextBlock>In this section, we’ll work on your first project. We will
      <ListBlock>
          <li>Deploy an NFT smart contract</li>
          <li>Create and store metadata off-chain on IPFS</li>
          <li>Create front-end to interact with NFT</li>
        </ListBlock></TextBlock>
    </SlideContent>
  );
  



  slides.getSlide(4).addCard(
    <SlideContent>
      <HeaderBlock>You’ve completed this lesson.</HeaderBlock>
      <TextBlock>In the next lesson, you&apos;ll learn how to setup your development environment </TextBlock>
    </SlideContent>
  );

  return slides;
};

export default ContentSlides;
