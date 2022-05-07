import type { NextPage } from 'next'
import whatisweb3card from '../../../public/images/cards/whatweb3card.png'
import nftscard from '../../../public/images/cards/nftscard.png'
import computercard from '../../../public/images/cards/computercard.png'
import blockchaincard from '../../../public/images/cards/blockchaincard.png'
import polygoncard from '../../../public/images/cards/polygoncard.png'
import Card from '../../../components/main/Card'
import Meta from '../../../components/header/meta'



const Index: NextPage = () => {
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
      
    </div>
  )
}

export default Index
