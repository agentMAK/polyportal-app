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
            Learn Web3 on Polygon
          </p>
          <p className="mt-12 font-sans-medium text-2xl text-primary-900">
            Free courses teaching the basics of Web3 on Polygon
          </p>
        </div>
        <div className="flex flew-row gap-x-[60px] flex-wrap justify-center gap-y-10 pt-20 pb-52">
          {/* <CourseCard image={web3} title="Web3 for Beginners" link="/learn/web3-video">
            What is Web3? How does it works? And how do I take advantage of the opportunities available. Let introduce you.
          </CourseCard> */}
          <CourseCard image={web3} title="Become a Web3 Developer on Polygon" link="/learn/web3-development">
           Interested in become a web3 developer. Create your every own NFTs and Tokens on Polygon.
          </CourseCard>
          <CourseCard image={metamask} title="Setup Metamask" status="disabled">
            Metamask is the web3 wallet used to interact with decentralised application. Learn how to get setup and start using Metamask.
          </CourseCard>
          <CourseCard image={nft} title="NFTs on Polygon" status="disabled">
            There are thousands of NFT projects in Crypto. The starter guide will help you navigate the space.
          </CourseCard>
          <CourseCard
            image={dao}
            title="Introduction to DAOs"
            status="disabled"
          >
            DAOs stand for Decentralised Autonomous Organisations. It&apos;s a new type of organsation built on the internet with participants from around the world. Let&apos;s explore.
          </CourseCard>
          <CourseCard
            image={metaverse}
            title="Explore the Metaverse"
            status="disabled"
          >
            The Metaverse is coming. Get familiar with the space now and the new possibilies that the Meteverse enables.
          </CourseCard>
          <CourseCard image={aave} title="How to use Aave" status="disabled">
            Aave is the decentralised lending protocol. You can both borrow crypto from Aave or lend your crypto to earn interest. Get to know Aave.
          </CourseCard>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
