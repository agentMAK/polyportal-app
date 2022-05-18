import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import logo from "../../public/images/logo/PolyPortalLogo.svg";
import discord from "../../public/images/icons/discordIcon.svg";
import Meta from "../../components/header/meta";
import React from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";

const Index: NextPage = (props: any) => {

  const [joinDiscordClicked, setJoinDiscordClicked] = React.useState(false);

    const joinDiscordButton = <a className="w-full"target="_blank" href="https://discord.gg/DTeRCGuHKq" rel="noopener noreferrer"><button className=' bg-white w-full h-9 text-primary-500 border border-primary-500 text-sm shadow font-sans-medium rounded-md hover:bg-primary-100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={() => setJoinDiscordClicked(true)}>
      <div className="flex justify-center gap-x-2">
      <Image
          src={discord}
          alt="Picture of the author"
          width={18}
          height={18}
        />
        Join our Discord
        </div>
        </button>
      </a>
      
  const refreshButton = <Link href="/learn" passHref><button className='h-9 bg-primary-500 text-white hover:bg-primary-400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500bg-white w-full h-9border border-primary-500 text-sm shadow font-sans-medium rounded-md'>
    Start Learning
  </button></Link>
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="h-screen bg-primary-100">
        <div className="flex flex-col items-center lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto h-full">
          <div className="pt-11">
            <Image
              src={logo}
              alt="PolyPortal Logo"
              width={220}
              height={50}
              layout="fixed"
            />
          </div>
          <div className="pt-32">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[350px]">
                {/*header*/}
                <div className="p-4 bg-primary-300 rounded-t-lg">
                    <p className="font-sans-semibold text-primary-800 text-center text-xl">Access Content</p>
                </div>
                {joinDiscordClicked ? null :<div className="relative mx-6 mt-6 flex-auto">
                <p className="text-sm font-sans-medium leading-relaxed text-center">
                  In order to access PolyPortal Courses, <br />please join our discord server
                  </p>
                </div>}
                {/*footer*/}
                <div className="flex items-center justify-center m-6  rounded-b">
                  {joinDiscordClicked ? refreshButton : joinDiscordButton}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/check-guild`, {
    method: "POST",
    body: JSON.stringify({ accessToken: session.accessToken }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
  const data = await res.json()

  if (data.message == "true") {
    return {
      redirect: {
        destination: "/learn",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
export default Index;
