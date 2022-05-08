import type { NextPage } from "next";
import Meta from "../../components/header/meta";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Modal from "../../components/main/modal/Modal";
import GuildModal from "../../components/main/modal/GuildModal";
import Image from "next/image";
import Link from "next/link";
import web3 from "../../public/images/cards/web3card.png";
import CourseCard from "../../components/main/CourseCard";
import dao from "../../public/images/cards/daocard.png";
import aave from "../../public/images/cards/aavecard.png";
import metaverse from "../../public/images/cards/metaversecard.png";
import nft from "../../public/images/cards/nftcard.png";
import metamask from "../../public/images/cards/metamaskcard.png";
import discord from "../../public/images/icons/discordlogo.svg";
import twitter from "../../public/images/icons/twitterlogo.svg";

const Index: NextPage = (props: any) => {
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center">
          <p className="mt-28 font-sans-semibold text-5xl text-primary600">
            Learn Web3 on Polygon
          </p>
          <p className="mt-12 font-sans-medium text-2xl text-primary600">
            Free courses teaching the basics of Web3 on Polygon
          </p>
        </div>
        <div className="flex flew-row gap-x-[60px] flex-wrap justify-center gap-y-10 pt-24">
          <CourseCard image={web3} title="Web3 for Beginners" link="/learn/web3-video">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
          <CourseCard image={metamask} title="Using Metamask" status="disabled">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
          <CourseCard image={nft} title="NFTs on Polygon" status="disabled">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
          <CourseCard
            image={dao}
            title="Introduction to DAOs"
            status="disabled"
          >
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
          <CourseCard
            image={metaverse}
            title="Explore the Metaverse"
            status="disabled"
          >
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
          <CourseCard image={aave} title="How to use Aave" status="disabled">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet
          </CourseCard>
        </div>
        
        <div className="flex flex-col items-center md:flex-row md:items-start gap-y-3 h-5 w-full justify-between pb-32 mt-52">
            <div className="md:hidden">
              <a className="mr-3" href="https://twitter.com/PolyPortalHQ">
                <Image src={twitter} alt="Twitter" height={20} width={20} />
              </a>
              <a href="https://discord.gg/DTeRCGuHKq">
              <Image src={discord} alt="Discord" height={20} width={20} />
              </a>
            </div>
          <div className="flex w-fit h-full">
            <p className="text-sm my-auto mr-3">
              Made with ❤️ &nbsp;in London
            </p>
            <div className="hidden md:block">
              <a className="mr-3" href="https://twitter.com/PolyPortalHQ">
                <Image src={twitter} alt="Twitter" height={20} width={20} />
              </a>
              <a href="https://discord.gg/DTeRCGuHKq">
              <Image src={discord} alt="Discord" height={20} width={20} />
              </a>
            </div>
          </div>
          <div className="w-fit bg-blue">
            <p className="text-sm my-auto mr-3">
              <Link href="/"><a>Terms and Conditions</a></Link> &nbsp; &nbsp; &nbsp;{" "}
              <a href="/privacy-policy"  target="_blank" rel="noopener noreferrer" >Privacy Policy</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
