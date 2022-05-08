import type { NextPage } from 'next'
import uniswapcard from '../../../public/images/cards-old/uniswapCard.png'
import whatweb3card from '../../../public/images/cards-old/whatweb3card.png'
import polygoncard from '../../../public/images/cards-old/polygoncard.png'
import Card from '../../../components/main/Card'
import Meta from '../../../components/header/meta'



const Index: NextPage = () => {
  return (
    <div>
      <Meta title='PolyPortal - Beginner Guide to Web3'></Meta>
        <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <div className="w-full py-12 text-center">
          <p className="font-sans-semibold text-[28px] text-primary600">Web3</p>
        </div>

          <div className="flex flex-col md:flex-row items-center flex-wrap justify-around lg:justify-between w-[625px] gap-y-10">

          <Card title="What is Web3?" image={whatweb3card} link='/learn/web3/lesson/what-is-web3'></Card>

          <Card title="Understanding Tokens" image={polygoncard} link='/learn/web3/lesson/understanding-tokens'></Card>

          <Card title="Exploring Web3" image={uniswapcard} link='/learn/web3/lesson/exploring-web3'></Card>

          </div>
        </div>
      
    </div>
  )
}

export default Index
