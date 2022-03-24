import type { NextPage } from 'next'
import openseacard from '../../public/images/openseaCard.png'
import uniswapcard from '../../public/images/uniswapCard.png'
import aavecard from '../../public/images/aavecard.png'
import decentralandcard from '../../public/images/decentralandcard.png'
import polymarketcard from '../../public/images/polymarketcard.png'
import pooltogethercard from '../../public/images/pooltogethercard.png'
import MainHeader from '../../components/elements/MainHeader'
import Card from '../../components/elements/Card'
import Meta from '../../components/meta'



const index: NextPage = () => {
  return (
    <div>
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Explore Web3</MainHeader>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between w-[625px] gap-y-10">

          <Card title="Uniswap" image={uniswapcard} link='https://app.uniswap.org/#/swap?chain=polygon'></Card>

          <Card title="Opensea" image={openseacard} link='https://opensea.io/'></Card>

          <Card title="PoolTogether" image={pooltogethercard} link='https://app.pooltogether.com/deposit?network=polygon'></Card>

          <Card title="Aave" image={aavecard} link='https://app.aave.com/?marketName=proto_polygon_v3'></Card>

          <Card title="Decentraland" image={decentralandcard} link='https://decentraland.org/'></Card>

          <Card title="PolyMarket" image={polymarketcard} link='https://polymarket.com/'></Card>
          </div>
        </div>
      
    </div>
  )
}

export default index
