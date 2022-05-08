import type { NextPage } from 'next'
import whatisweb3card from '../../../public/images/cards-old/whatweb3card.png'
import nftscard from '../../../public/images/cards-old/nftscard.png'
import computercard from '../../../public/images/cards-old/computercard.png'
import blockchaincard from '../../../public/images/cards-old/blockchaincard.png'
import polygoncard from '../../../public/images/cards-old/polygoncard.png'
import Card from '../../../components/main/Card'
import Meta from '../../../components/header/meta'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Modal from '../../../components/main/modal/Modal'
import GuildModal from '../../../components/main/modal/GuildModal'



const Index: NextPage = () => {
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
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <div className="w-full py-12 text-center">
          <p className="font-sans-semibold text-[28px] text-primary600">The Complete Beginner&apos;s Guide to Web3</p>
        </div>

          <div className="flex flex-col md:flex-row items-center flex-wrap justify- lg:justify-start w-[625px] gap-x-12 gap-y-10">

          <Card title="Introduction" image={computercard} link='/learn/web3-video/lesson/introduction-to-web3'></Card>

          <Card title="Why Polygon?" image={polygoncard} link='/learn/web3-video/lesson/why-polygon'></Card>

          <Card title="What is Web3?" image={blockchaincard} link='/learn/web3-video/lesson/what-is-web3-video'></Card>

          <Card title="Core idea of Web3" image={whatisweb3card} link='/learn/web3-video/lesson/core-ideas-of-web3'></Card>

          <Card title="DApps, NFTs and Tokens" image={nftscard} link='/learn/web3-video/lesson/dapps-nfts-tokens'></Card>

          </div>
        </div>
        {!loggedIn ? <Modal /> : null}
        {/* {showPolyPortalModal ? <GuildModal /> : null} */}
    </div>
  )
}

export default Index
