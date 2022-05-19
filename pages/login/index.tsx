import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import logo from "../../public/images/logo/PolyPortalLogo.svg";
import discord from "../../public/images/icons/discordIcon.svg";
import { getSession, signIn } from "next-auth/react";
import Meta from "../../components/header/meta";
import Link from "next/link";

const Index: NextPage = (props: any) => {
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="h-screen bg-primary-100">
        <div className="flex flex-col items-center lg:max-w-screen-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md mx-auto h-full">
          <div className="pt-11">
          <Link href="/learn" passHref><a><Image
              src={logo}
              alt="PolyPortal Logo"
              width={220}
              height={50}
              layout="fixed"
              priority
            /></a></Link>
          </div>
          <div className="pt-32">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[350px]">
                {/*header*/}
                <div className="p-4 bg-primary-300 rounded-t-lg">
                    <p className="font-sans-semibold text-primary-800 text-center text-xl">Login</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center m-6  rounded-b">
                <button className=' bg-white w-full h-9 text-primary-500 border border-primary-500 text-sm shadow font-sans-medium rounded-md
                 hover:bg-primary-100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={() => signIn("discord", { callbackUrl: '/login/discord' })}>
                <div className="flex justify-center gap-x-2">
                <Image
                    src={discord}
                    alt="Picture of the author"
                    width={18}
                    height={18}
                  />
                  Sign in with Discord
                  </div>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
