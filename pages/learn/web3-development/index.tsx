import type { NextPage } from "next";
import Meta from "../../../components/header/meta";

import Image from "next/image";
import web3 from "../../../public/images/cards/web3card.png";
import Button from "../../../components/main/Button";
import Footer from "../../../components/main/Footer";
import Modal from "../../../components/main/modal/Modal";
import { useState } from "react";
import LessonCard from "../../../components/main/LessonCard";
import SubLesson from "../../../components/main/SubLesson";

const Index: NextPage = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div>
      <Meta title="PolyPortal - Become a Web3 Developer on Polygon"></Meta>
      <div className="w-full pt-20 pb-44 sm:py-20 bg-primary-500">
        <div className="lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto h-[590px] md:h-[540px] lg:h-fit">
          <div className="flex flex-row flex-wrap h-80 w-full justify-center lg:justify-between items-center gap-y-10">
            <div className="text-white text-center lg:text-left">
              <p className="font-sans-semibold text-5xl">
                Become a Web3 <br />
                Developer on Polygon
              </p>
              <p className="font-sans-medium text-lg pt-10 lg:pt-3">
                In this course, you’ll learn:
              </p>
              <ul className="list-none lg:list-disc font-sans ml-5 pt-3">
                <li>How to start a career in Web3</li>
                <li>How to get setup and build smart contracts</li>
                <li>How to create your own NFTs and Tokens</li>
              </ul>
            </div>
            <div className="h-[300px] w-[481px] rounded-xl relative overflow-hidden">
              <Image
                src={web3}
                alt="image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto"
        id="lessons"
      >
        <div className="mt-24">
          <p className="text-center font-sans-semibold text-3xl text-primary-700">
            Getting Started
          </p>
          <div className="flex flex-col max-w-4xl mt-12 bg-white mx-auto rounded-xl drop-shadow-md">
            <LessonCard link='/learn/web3-development/lesson/introduction-to-web3/0' setShowModal={setShowModal} emoji="🎓">Introduction to Web3</LessonCard>
              <SubLesson >What is Web3?</SubLesson>
              <SubLesson>Opportunities in Web3</SubLesson>
              <SubLesson>How to get started</SubLesson>
          </div>
        </div>

        <div className="mt-24">
          <p className="text-center font-sans-semibold text-3xl text-primary-700">
            Start Building
          </p>
          <div className="flex flex-col max-w-4xl mt-12 bg-white mx-auto rounded-xl drop-shadow-md">
            <LessonCard emoji='🎨'>How to build and deploy a NFT on Polygon</LessonCard>
            <LessonCard emoji="😊">How to create your own token on Polygon</LessonCard>
            <LessonCard emoji="📄">Create your first contract on Polygon</LessonCard>
          </div>
        </div>

        <div className="mt-32 w-5/6 mx-auto mb-52">
          <p className=" text-2xl font-sans-medium text-primary-900 text-center">
            Web3 shouldn’t be difficult. <br />
            We’ll help you to navigate the space.
          </p>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-center items-center mt-32">
            <Button
              variant="dark"
              link="/learn/web3-development/lesson/introduction-to-web3/1"
            >
              Start Course
            </Button>
            <Button
              variant="light"
              link="https://discord.gg/DTeRCGuHKq"
              newTab={true}
            >
              Join our Discord
            </Button>
          </div>
        </div>

        <Footer />
      </div>
      {showModal ? <Modal setShowModal={setShowModal}/> : null}
    </div>
  );
};

export default Index;
