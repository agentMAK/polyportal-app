import type { NextPage } from 'next'
import metamaskCard from '../../../public/images/metamaskCard.png'
import uniswapcard from '../../../public/images/uniswapCard.png'
import blockchaincard from '../../../public/images/blockchaincard.png'
import buycryptocard from '../../../public/images/buycryptocard.png'
import polygoncard from '../../../public/images/polygoncard.png'
import whatweb3card from '../../../public/images/whatweb3card.png'
import MainHeader from '../../../components/elements/MainHeader'
import Card from '../../../components/elements/Card'
import Meta from '../../../components/meta'



const index: NextPage = () => {
  return (
    <div>
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Web3</MainHeader>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between w-[625px] gap-y-10">

          <Card title="Blockchain Basics" image={blockchaincard} link='/learn/web3/'></Card>

          <Card title="Polygon" image={polygoncard} link=''></Card>

          <Card title="What is Web3?" image={whatweb3card} link=''></Card>

          <Card title="Setup Wallet" image={metamaskCard} link=''></Card>

          <Card title="Buy Crypto" image={buycryptocard} link=''></Card>

          <Card title="Try Uniswap" image={uniswapcard} link='https://app.uniswap.org/#/swap?chain=polygon'></Card>
          </div>
        </div>
      
    </div>
  )
}

export default index
