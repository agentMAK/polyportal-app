import TextBlock from "../content-blocks/TextBlock";
import web3history from "../../../public/images/learn/web3/what-is-web3/web3history.png";
import tech from "../../../public/images/learn/web3/what-is-web3/tech.png";
import ideas from "../../../public/images/learn/web3/what-is-web3/ideas.png";
import web3final from "../../../public/images/learn/web3/what-is-web3/web3final.png";
import web3start from "../../../public/images/learn/web3/what-is-web3/web3start.png";
import ImageBlock from "../content-blocks/ImageBlock";
import HeaderBlock from "../content-blocks/HeaderBlock";
import SlideContent from "../SlideContent";
import Slides from "../Slides";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
    <HeaderBlock>What is Web3?</HeaderBlock>
    <TextBlock>
    In this lesson, we’ll learn about what Web3 is and how it works in the real world. Web3 is the next generation of the internet
Let’s start by looking at how evolution of Web3
    </TextBlock>
    <ImageBlock image={web3start}></ImageBlock>
  </SlideContent>
  )

  slides.setEndSlide(
    <SlideContent>
    <HeaderBlock>Lesson Completed</HeaderBlock>
    <TextBlock>
    Well done for the completed this lesson
    </TextBlock>
    <ImageBlock image={web3start}></ImageBlock>
  </SlideContent>
  )

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Web1 - Read only</HeaderBlock>
      <TextBlock>
        Web1 was the first evolution of the internet, starting around the 1900s.
        Web1 gave us access to a read only interent. This was primarily access
        static websites owned by companies.
      </TextBlock>
      <ImageBlock image={web3history}></ImageBlock>
      <TextBlock>
        In this era. the biggest winner of Web1 was undoubtly Google, a company
        that still thrives today. Google gave the ability to search through the
        read-only content produced online. Other big winner include Yahoo,
        Craiglist, and AOL.
      </TextBlock>
    </SlideContent>
  );
  
  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Web1 - Read only</HeaderBlock>
      <TextBlock>
        Web1 was the first evolution of the internet, starting around the 1900s.
        Web1 gave us access to a read only interent. This was primarily access
        static websites owned by companies.
      </TextBlock>
      <ImageBlock image={web3history}></ImageBlock>
      <TextBlock>
        In this era. the biggest winner of Web1 was undoubtly Google, a company
        that still thrives today. Google gave the ability to search through the
        read-only content produced online. Other big winner include Yahoo,
        Craiglist, and AOL.
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Web2 - Read and write</HeaderBlock>
      <TextBlock>
        The next generation of the internet was Web2, starting in around 2004.
        The primary capabilities the web2 introduced was abilty to both read and
        write on the internet. In particular, was the evolution of
        user-generated content. Anyone in the world could publish content online
        that could be seen by millions.
      </TextBlock>
      <ImageBlock image={web3history}></ImageBlock>
      <TextBlock>
        In this era, the biggest winner of Web2 was Facebook. Facebook was able
        to leverage user-genereated conent to create a social media empire.
        Other big winners from web2 included Twitter, Youtube, Uber and TikTok.
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Web3 - Read, Write and Own</HeaderBlock>
      <TextBlock>
        Web3 introduces is the ability to truly own digital asset, natively on
        the internet. This has never been possible before. Thanks to blockchain
        technologies, the internet now has digital ownership that doesn’t
        require users to trust any centralised entity.
      </TextBlock>
      <ImageBlock image={web3final}></ImageBlock>
      <TextBlock>
        In web2, we delegate our data, content and trust to third-party platform
        such as Facebook and Google. In doing so, we give the centralised
        corporation significant the power. However, with a click of a finger,
        these to censor our content with a click of a finger.
      </TextBlock>
      <TextBlock>
        Web3 enables true ownership in the sense that no one, not even the
        creators, can take this ownership away. As such, this simple capability
        is going to changes the internet as we know it, forever.
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Core Technologies of Web3</HeaderBlock>
      <TextBlock>
        <span className="font-sans-semibold">Blockchain</span> - A  blockchain
        is a highly secure and decentralised network that allows people to store
        data, exchange value, and record transaction activity in a shared ledger
        that is not controlled by any central authority.
      </TextBlock>
      <ImageBlock image={tech}></ImageBlock>
      <TextBlock>
        <span className="font-sans-semibold">Smart Contracts</span> - are
        tamper-proof programs that run on the blockchain. Smart contracts can be
        used to create decentralised applications, also known as dApps. dApps
        have the benefits of being censorship-resistant, privacy-focused,
        cryptographically secure application run on the blockchain.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Tokens</span> - In Web3, anyone can
        create that is backed by the security the blockchain. These interactive
        and tradable tokens have enabled entirely new industries to be created
        and new business model to be formed.
      </TextBlock>
    </SlideContent>
  )

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Core Ideas of Web3</HeaderBlock>
      <TextBlock>
        <span className="font-sans-semibold">Web3 is Decentralisation</span> - This is by for the most important aspect of Web3. The decentralised nature of Web3 is what enables properties such as ownership and censorship-resistant to exist. Web3 always strives to be decentralised as possible to in order to distribute power to users and creators.
      </TextBlock>
      <ImageBlock image={ideas}></ImageBlock>
      <TextBlock>
        <span className="font-sans-semibold">Web3 is permissionless</span> - This means everyone has equal access to participate in Web3,
and no one gets excluded. It’s doesn’t matter who you are, or where you are in the
world, everyone has access.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Web3 is user-owned</span> - Unlike traditional big tech companies like Google and Facebook, that take ownership away from creators, Web3 focus on bring power back to creators. Web3 enables users to own their data, identity and communities they have online. 
      </TextBlock>
    </SlideContent>
  );
  return slides;
};

export default ContentSlides;
