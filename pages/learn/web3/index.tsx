import type { NextPage } from 'next'
import uniswapcard from '../../../public/images/uniswapCard.png'
import whatisweb3card from '../../../public/images/whatweb3card.png'
import nftscard from '../../../public/images/nftscard.png'
import computercard from '../../../public/images/computercard.png'
import blockchaincard from '../../../public/images/blockchaincard.png'
import polygoncard from '../../../public/images/polygoncard.png'
import MainHeader from '../../../components/elements/MainHeader'
import Card from '../../../components/elements/Card'
import Meta from '../../../components/meta'



const Index: NextPage = () => {
  return (
    <div>
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>The Complete Beginner&apos;s Guide to Web3</MainHeader>

          <div className="flex flex-col md:flex-row items-center flex-wrap justify- lg:justify-start w-[625px] gap-x-12 gap-y-10">

          <Card title="Introduction" image={computercard} link='/learn/web3/lesson/introduction-to-web3'></Card>

          <Card title="Why Polygon?" image={polygoncard} link='/learn/web3/lesson/why-polygon'></Card>

          <Card title="What is Web3?" image={blockchaincard} link='/learn/web3/lesson/what-is-web3-video'></Card>

          <Card title="Core idea of Web3" image={whatisweb3card} link='/learn/web3/lesson/core-ideas-of-web3'></Card>

          <Card title="DApps, NFTs and Tokens" image={nftscard} link='/learn/web3/lesson/dapps-nfts-tokens'></Card>

          </div>
        </div>
      
    </div>
  )
}

export default Index
