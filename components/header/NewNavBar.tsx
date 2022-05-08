import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/PolyPortalLogo.svg";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import discord from "../../public/images/icons/discordIcon.svg";
import React from "react";
import UserDropdown from "./UserDropdown";

const NavLink = (props: any) => {
  let navlink;
  if (props.isActive) {
    navlink = (
      <Link href={props.link} passHref>
        <a className="my-auto">
          <div className="flex justify-center bg-white w-[65px] h-[23px] rounded-lg my-auto ml-[px] shadow-md">
            <p className="my-auto ">{props.children}</p>
          </div>
        </a>
      </Link>
    );
  } else {
    navlink = (
      <Link href={props.link} passHref>
        <a className="my-auto">
          <div className="flex justify-center w-[65px] h-[23px] rounded-lg my-auto ml-[px]">
            <p className="my-auto ">{props.children}</p>
          </div>
        </a>
      </Link>
    );
  }

  if (props.inActive) {
    navlink = (
      <a className="my-auto">
        <div className="flex justify-center w-[65px] h-[23px] rounded-lg my-auto ml-[px] opacity-50">
          <p className="my-auto select-none">{props.children}</p>
        </div>
      </a>
    );
  }

  return navlink;
};

NavLink.defaultProps = {
  isActive: false,
  inActive: false,
};

const NavBar = () => {
  const router = useRouter();
  const navPath = "/learn";
  const { data: session, status } = useSession();

  return (
    <div className="top-0 w-full h-20 fixed bg-white z-50">
      <div className="flex w-full h-full justify-between content-center items-center px-9">
        <Link href="/learn" passHref>
          <a className="h-fit w-fit">
            <Image
              src={logo}
              alt="PolyPortal Logo"
              width={140}
              height={32}
              layout="fixed"
            />
          </a>
        </Link>
        <div className="flex justify-center gap-x-11 h-fit my-auto pl-[116px]">
          <Link href="/learn" passHref>
            <p className="text-xl text-primary600 font-sans-semibold opacity-25">
              Access
            </p>
          </Link>
          <Link href="/learn" passHref>
            <a className="text-xl text-primary600 font-sans-semibold">Learn</a>
          </Link>
          <Link href="/learn" passHref>
            <p className="text-xl text-primary600 font-sans-semibold opacity-25">
              Explore
            </p>
          </Link>
        </div>
        <div className="flex justify-end w-64">
          {session ? (
            session.user ? (
              <UserDropdown image={session.user.image} />
            ) : null
          ) : (
            <button
              className=" bg-white w-52 h-9 text-primary border border-primary text-sm shadow font-sans-medium rounded-md hover:bg-primary100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500"
              onClick={() => signIn("discord")}
            >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
