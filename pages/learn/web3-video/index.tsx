import type { NextPage } from "next";
import Meta from "../../../components/header/meta";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from "../../../components/main/modal/Modal";
import Image from "next/image";
import web3 from "../../../public/images/cards/web3card.png";
import Button from "../../../components/main/Button";
import Footer from "../../../components/main/Footer";
import Link from "next/link";
import GuildModal from "../../../components/main/modal/GuildModal";

const LessonCard = (props: any) => {
  return (
    <div className="flex md:flex-row flex-col text-center md:text-left w-full items-center justify-center border-b-gray-300 border-b last:border-0 px-5 md:px-0">
      <div className="w-1/6 hidden md:block">
        <p className="text-center font-sans-semibold text-5xl text-primary-500">
          {props.lesson}
        </p>
      </div>
      <div className="md:w-4/6 pt-10 pb-5 md:pb-10">
        <Link href={props.link}><a className="text-xl font-sans-semibold text-primary-900 hover:text-primary-500">
          {props.title}
        </a></Link>
        <p className="text-base font-sans-medium">
          {props.children}
        </p>
      </div>
      <div className="md:w-1/6 pb-10 md:pb-0">
        <Button size="s" link={props.link}>Start</Button>
      </div>
    </div>
  );
};

const Index: NextPage = () => {

  const { status } = useSession()
  
  let loggedIn = false
  let showPolyPortalModal = false
  if (status == "authenticated") {
    loggedIn = true
    showPolyPortalModal = true
  }

  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/check-guild')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (data != null && data.message == 'true' && loggedIn == true) {
    showPolyPortalModal = false
  }

  return (
    <div>
      <Meta title="PolyPortal - A Beginner Guide to Web3"></Meta>

      <div className="w-full py-20 bg-primary-500">
        <div className="lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto h-[590px] md:h-[540px] lg:h-fit">
          <div className="flex flex-row flex-wrap h-80 w-full justify-center lg:justify-between items-center gap-y-10">
            <div className="text-white text-center lg:text-left">
              <p className="font-sans-semibold text-5xl">Web3 for Beginners</p>
              <p className="font-sans-medium text-lg pt-10 lg:pt-3">
                In this course, you’ll learn:
              </p>
              <ul className="list-none lg:list-disc font-sans ml-5 pt-3">
                <li>What is Web3?</li>
                <li>How it works</li>
                <li>How to get involved in the space</li>
              </ul>
            </div>
            <div className="h-[300px] w-[481px] rounded-xl relative overflow-hidden">
              <Image
                src={web3}
                alt="image"
                width={480}
                height={300}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto">
        <div className="flex justify-center mt-20">
          <Button variant="dark" link="/learn/web3-video/lesson/introduction-to-web3">Start Learning Now</Button>
        </div>
        <div className="flex flex-col max-w-4xl mt-20 bg-white mx-auto rounded-xl drop-shadow-md">
          <LessonCard title="Introduction" lesson="1" link='/learn/web3-video/lesson/introduction-to-web3'>Introduction to the Web3 course material and how to navigate the course.</LessonCard>
          <LessonCard title="Why Polygon?" lesson="2" link='/learn/web3-video/lesson/why-polygon'>Learn about how Polygon works and the advantages of using the Polygon network.</LessonCard>
          <LessonCard title="What is Web3?" lesson="3" link='/learn/web3-video/lesson/what-is-web3-video'>Explore the evolution from Web1, to Web2, to Web3 and the capabiliies Web3 brings to the internet</LessonCard>
          <LessonCard title="Core ideas of Web3" lesson="4" link='/learn/web3-video/lesson/core-ideas-of-web3'>Discover the core ideas that Web3 is built on and the technologies the enable it.</LessonCard>
          <LessonCard title="DApps, NFTs and Tokens" lesson="5" link='/learn/web3-video/lesson/dapps-nfts-tokens'>Learn about DApps, NFTs and tokens that make up the Web3 space and the use cases these have.</LessonCard>
        </div>
        
        <div className="mt-32 w-5/6 mx-auto mb-52">
          <p className=" text-2xl font-sans-medium text-primary-900 text-center">
            Web3 shouldn’t be difficult. <br />
            We’ll help you to navigate the space.
          </p>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 justify-center items-center mt-32">
            <Button variant="dark" link='/learn/web3-video/lesson/introduction-to-web3'>
              Start Learning
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

      </div>  x

      {loggedIn ? null : <Modal />}
      {showPolyPortalModal ? <GuildModal /> : null}
    </div>
  );
};

export default Index;
