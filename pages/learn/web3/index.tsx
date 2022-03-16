import type { NextPage } from 'next'
import Link from 'next/link'
import Card from '../../../components/elements/card'
import uniswapCard from '../../../public/images/uniswapCard.png'
import metamaskCard from '../../../public/images/metamaskCard.png'
import openseaCard from '../../../public/images/openseaCard.png'
import MainHeader from '../../../components/elements/MainHeader'
import NavBar from '../../../components/elements/NavBar'
import Image from 'next/image'



const index: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
      <MainHeader>The Beginners Journey into Web3</MainHeader>
        <div className="flex flex-row w-full flex-wrap justify-around lg:justify-between">
        
            <Card title="Setup a wallet using Metamask" image={metamaskCard} link='/learn/web3/setupMetamask'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.</Card>

            <Card title="Make a token swap on Uniswap" image={uniswapCard} link=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.</Card>

            <Card title="Buy a NFT on Opensea" image={openseaCard} link=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.</Card>
        </div>
      </div>
    </div>
  )
}

export default index
