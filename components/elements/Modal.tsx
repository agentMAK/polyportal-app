import logo from "../../public/images/polyportalName.svg"
import discord from "../../public/images/discordIcon.svg";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const Modal = (props:any) => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[350px]">
                {/*header*/}
                <div className="flex items-start justify-between p-4 bg-primary300 rounded-t-lg">
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    width={108}
                    height={32}
                  />
                </div>
                {/*body*/}
                <div className="relative mx-6 mt-6 flex-auto">
                  <p className="text-sm font-sans-semibold leading-relaxed">
                    Thanks for your interest in PolyPortal
                  </p>
                  <p className="text-sm font-sans-base leading-relaxed">
                    To get started, login or sign up below. 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center m-6  rounded-b">
                <button className=' bg-white w-full h-9 text-primary border border-primary text-sm shadow font-sans-medium rounded-md hover:bg-primary100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={() => signIn("discord")}>
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
  }
  
  export default Modal
  