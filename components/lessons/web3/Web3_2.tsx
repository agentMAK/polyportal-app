import TextBlock from "../../app/content-blocks/TextBlock";
import web3start from "../../../public/images/lessons/web3/web3guide.png";
import tokens from '../../../public/images/lessons/web3/tokens.png'
import fungible from "../../../public/images/lessons/web3/fungible.png";
import maticToken from "../../../public/images/lessons/web3//matictoken.png";
import nft from "../../../public/images/lessons/web3/nftgallery.png";
import ImageBlock from "../../app/content-blocks/ImageBlock";
import HeaderBlock from "../../app/content-blocks/HeaderBlock";
import SlideContent from "../../app/slides/SlideContent";
import Slides from "../../app/slides/Slides";

const ContentSlides = () => {
  let slides = new Slides();

  slides.setStartSlide(
    <SlideContent>
      <HeaderBlock>Understanding Tokens</HeaderBlock>
      <TextBlock>
        In this lesson, we’ll learn about DApps, NFTs and tokens that make up
        the Web3 space and the use cases these have.
      </TextBlock>
      <ImageBlock image={tokens}></ImageBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Types of Tokens</HeaderBlock>
      <TextBlock>
        Anyone can create, interact with and trade tokens. In Web3, there are 2
        main types of tokens.
      </TextBlock>
      <ImageBlock image={fungible}></ImageBlock>
      <TextBlock>
        <span className="font-sans-semibold">Fungible Tokens</span> - These are
        tokens that are traded on equal terms and are completely interchangeable
        with each other. Fungible tokens include Bitcoin, Ether and Matic.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Non-Fungible Tokens (NFTs)</span> -
        These are unique, non-identical tokens, that cannot be traded on equal
        terms. Non-fungible tokens include Bored Yacht Ape Club and Cryptopunks.
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Fungible Tokens</HeaderBlock>
      <TextBlock>
        There are various use cases for fungible tokens in crypto:
      </TextBlock>
      <ImageBlock image={maticToken}></ImageBlock>
      <TextBlock>
        <span className="font-sans-semibold">Currency</span> - This is most the
        basic use case. We can use tokens as currency to exchange goods and
        services in the economy. Examples include USDC and USDT.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Goverance</span> - Governance
        tokens can represent voting power for a blockchain project. This means
        that token can be used to create and vote on governance proposals which
        influence the direction and characteristics of a protocol.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Assets</span> - Token can represent
        assets. This could equity in a company through stock, or it represent
        real world assets such as real estate, gold and silver.{" "}
      </TextBlock>
    </SlideContent>
  );

  slides.addSlide(
    <SlideContent>
      <HeaderBlock>Non-Fungible Tokens (NFTs)</HeaderBlock>
      <TextBlock>
        NFTs have become massively popular right now and have many different use
        cases:
      </TextBlock>
      <ImageBlock image={nft}></ImageBlock>
      <TextBlock>
        <span className="font-sans-semibold">Digital Art</span> - NFTs can used
        to create digital art. NFTs create scarcity by limitng the number of
        owners a particular piece of art has. This has lead to NFTs selling for
        milions.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Gaming</span> - In-game items is
        massively growing area of gaming. With NFTs, you can truly own the asset
        you acquire during playing a game. This NFTs can then be trade for real
        monetary value.
      </TextBlock>
      <TextBlock>
        <span className="font-sans-semibold">Membership & Access</span> - NFTs
        can be used memberships and access. A particular NFT may give membership
        to a community or access to member only content. The NFT may be used
        provide access to private events or conference.
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
