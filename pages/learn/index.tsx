import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../components/header/meta";
import { getSession, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import web3 from "../../public/images/cards/web3card.png";
import CourseCard from "../../components/main/CourseCard";
import dao from "../../public/images/cards/daocard.png";
import aave from "../../public/images/cards/aavecard.png";
import metaverse from "../../public/images/cards/metaversecard.png";
import nft from "../../public/images/cards/nftcard.png";
import metamask from "../../public/images/cards/metamaskcard.png";
import Footer from "../../components/main/Footer";

const Index: NextPage = (props: any) => {
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto">
        <div className="text-center">
          <p className="sm:mt-20  mt-16 font-sans-semibold text-5xl text-primary-900">
            Learn Web3
          </p>
          {/* <p className="mt-12 font-sans-medium text-2xl text-primary-900">
            Free courses teaching the basics of Web3 on Polygon
          </p> */}
        </div>
        <div className="flex flew-row gap-x-[60px] flex-wrap justify-center gap-y-10 pt-20 pb-52">
          {/* <CourseCard image={web3} title="Web3 for Beginners" link="/learn/web3-video">
            What is Web3? How does it works? And how do I take advantage of the opportunities available. Let introduce you.
          </CourseCard> */}
          <CourseCard image={web3} title="What is Web3" link="/learn/lesson/introduction-to-web3/0">
           Explore what Web3 is all about. Discover how you can get involved in the Web3 space
          </CourseCard>
          <CourseCard image={metamask} title="Create a Web3 Wallet" link="/learn/lesson/create-wallet/0">
            Metamask is the web3 wallet used to interact with decentralised application. Learn how to get setup and start using Metamask.
          </CourseCard>
          <CourseCard image={nft} title="Mint a NFT" link="/learn/lesson/mint-a-nft/0">
            There are thousands of NFT projects in Crypto. The starter guide will help you navigate the space.
          </CourseCard>
          {/* <CourseCard
            image={dao}
            title="Swap Tokens"
            status="disabled"
          >
            Make you&apos;re very first token swap using a decentrailized exchange. Start interacting with web3 apps
          </CourseCard>
          <CourseCard
            image={metaverse}
            title="Fund your Wallet"
            status="disabled"
          >
            Let&apos;s help you get funds directly into your Polygon Wallet. We&apos;ll walk you through the process
          </CourseCard> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
