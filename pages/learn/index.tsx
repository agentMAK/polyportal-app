import type { NextPage } from 'next'
import MainHeader from '../../components/elements/MainHeader'
import Meta from '../../components/meta'
import web3Guide from '../../public/images/web3guide.png'
import LongCard from '../../components/elements/LongCard'

const index: NextPage = () => {
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Learn Web3</MainHeader>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between w-full max-w-screen-lg gap-10">
            <LongCard
            title = "The Complete Beginner&apos;s Guide to Web3"
            time = "Approx. 30 mins"
            link="/learn/web3"
            image={web3Guide}>
              <li>Learn how to setup your first Web3 wallet on Polygon using Metamask</li>
              <li>Learn how to interact with dApps (Web3 applications) such as Uniswap, Opensea and others.</li>
            </LongCard>

            <LongCard
            title = "The Complete Beginner&apos;s Guide to Polygon"
            time = "Approx. 30 mins"
            link="/learn/web3"
            image={web3Guide}>
              <li>Learn how to setup your first Web3 wallet on Polygon using Metamask</li>
              <li>Learn how to interact with dApps (Web3 applications) such as Uniswap, Opensea and others.</li>
            </LongCard>
          </div>
        </div>
      

    </div>
  )
}

export default index
