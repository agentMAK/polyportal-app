import type { NextPage } from 'next'
import uniswapCard from '../../../public/images/uniswapCard.png'
import metamaskCard from '../../../public/images/metamaskCard.png'
import openseaCard from '../../../public/images/openseaCard.png'
import MainHeader from '../../../components/elements/MainHeader'
import NavBar from '../../../components/elements/NavBar'
import Card from '../../../components/elements/Card'



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

            <Card title="Make a token swap on Uniswap" image={uniswapCard} link='/learn/web3/tokenSwap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.</Card>

            <Card title="Buy a NFT on Opensea" image={openseaCard} link='/learn/web3/buyNFT'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.</Card>
        </div>
      </div>
    </div>
  )
}

export default index
