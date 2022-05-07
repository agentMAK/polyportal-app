import type { NextPage } from 'next'
import Meta from '../../components/header/meta'
import web3Guide from '../../public/images/lessons/web3/web3guide.png'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Modal from '../../components/main/modal/Modal'
import GuildModal from '../../components/main/modal/GuildModal'
import Image from 'next/image'
import Link from 'next/link'

const Index: NextPage = (props:any) => {
  const { status } = useSession()
  
  let loggedIn = true
  let showPolyPortalModal = true
  if (status != "authenticated") {
    loggedIn = false
    showPolyPortalModal = false
  }

  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/check-guild')
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
        <Meta title="PolyPortal - Learn Web3"></Meta>
        <div className="flex flex-col items-center max-w-xs md:max-w-screen-md lg:max-w-screen-lg mx-auto text-left">
        <div className="w-full py-12 text-center">
          <p className="font-sans-semibold text-[28px] text-primary600">Learn Web3</p>
        </div>
            <div className="flex flex-row flex-wrap justify-around lg:justify-between w-full max-w-screen-lg gap-10">
              <div className="flex flex-col md:flex-row items-center w-full rounded-xl bg-primary">
                <div className=" h-full md:w-2/5 w-full p-7">
                <Image
                    src={web3Guide}
                    alt="metamask"
                    height={188}
                    width={300}
                    layout="responsive"
                    priority={true}
                />
                </div>
                <div className="flex flex-col h-full md:w-3/5 pb-7 md:p-7 text-center md:text-left">
                    <div className="h-full text-white">
                      <p className="font-sans-semibold text-2xl mb-1">The Complete Beginner&apos;s Guide to Web3</p>
                      <p className="text-xl mb-4">Approx. 30 mins</p>
                        <ul className="list-disc ml-3 text-[15px] md:w-3/4">
                          <li>Learn the core ideas and technologies of Web3</li>
                          <li>Learn about Web3 dApps, NFTs and Tokens</li>
                          <li>Learn about get involved in Web3</li>
                      </ul>
                    </div>
                    <div className="flex md:justify-end justify-center">
                    <Link href="/learn/web3"><a>
                    <button className="bg-white h-12 w-32 rounded-md font-sans-medium mt-5 md:mt-0 text-primary hover:bg-primary400 hover:text-white">Start Course</button>
                    </a></Link>
                    </div>
      </div>
    </div>
            </div>
          </div>
        {!loggedIn ? <Modal /> : null}
        {showPolyPortalModal ? <GuildModal /> : null}

      </div>
    )
}

export default Index
