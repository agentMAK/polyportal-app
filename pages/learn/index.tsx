import type { NextPage } from 'next'
import MainHeader from '../../components/elements/MainHeader'
import Meta from '../../components/meta'
import web3Guide from '../../public/images/web3guide.png'
import LongCard from '../../components/elements/LongCard'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Modal from '../../components/elements/Modal'
import GuildModal from '../../components/elements/GuildModal'

const Index: NextPage = (props:any) => {
  const { status } = useSession()
  
  let loggedIn = true
  let showPolyPortalModal = false
  if (status != "authenticated") {
    loggedIn = false
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

  
  if (data != null && data.message != 'true' && loggedIn == true) {
     showPolyPortalModal = true
  }

    return (
      <div>
        <Meta title="PolyPortal - Learn Web3"></Meta>
        <div className="flex flex-col items-center max-w-xs md:max-w-screen-md lg:max-w-screen-lg mx-auto text-left">
          <MainHeader>Learn Web3</MainHeader>
            <div className="flex flex-row flex-wrap justify-around lg:justify-between w-full max-w-screen-lg gap-10">
              <LongCard
              title = "The Complete Beginner&apos;s Guide to Web3"
              time = "Approx. 30 mins"
              link="/learn/web3"
              image={web3Guide}>
                <li>Learn the core ideas and technologies of Web3</li>
                <li>Learn about Web3 dApps, NFTs and Tokens</li>
                <li>Learn about get involved in Web3</li>
              </LongCard>
            </div>
          </div>
        {!loggedIn ? <Modal /> : null}
        {showPolyPortalModal ? <GuildModal /> : null}

      </div>
    )
}

export default Index
