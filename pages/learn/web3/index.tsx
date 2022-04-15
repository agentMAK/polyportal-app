import type { NextPage } from 'next'
import metamaskCard from '../../../public/images/metamaskCard.png'
import uniswapcard from '../../../public/images/uniswapCard.png'
import whatweb3card from '../../../public/images/whatweb3card.png'
import MainHeader from '../../../components/elements/MainHeader'
import Card from '../../../components/elements/Card'
import Meta from '../../../components/meta'



const Index: NextPage = () => {
  return (
    <div>
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Web3</MainHeader>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between w-[625px] gap-y-10">

          <Card title="What is Web3?" image={whatweb3card} link='/learn/web3/what-is-web3'></Card>

          <Card title="Understanding Tokens" image={metamaskCard} link='/learn/web3/what-is-web3' status='disabled'></Card>

          <Card title="Exploring Web3" image={uniswapcard} link='/learn/web3/what-is-web3' status='disabled'></Card>
          </div>
        </div>
      
    </div>
  )
}

export default Index
