import type { NextPage } from 'next'
import Card from '../../components/elements/Card'
import MainHeader from '../../components/elements/MainHeader'
import Meta from '../../components/meta'
import web3card from '../../public/images/web3card.png'
import deficard from '../../public/images/deficard.png'
import daocard from '../../public/images/daocard.png'
import metaversecard from '../../public/images/metaversecard.png'
import musiccard from '../../public/images/musiccard.png'
import nftscard from '../../public/images/nftscard.png'

const index: NextPage = () => {
  return (
    <div>
      <Meta title="PolyPortal - Learn Web3"></Meta>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Learn Web3</MainHeader>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between w-[625px] gap-y-10">

              <Card title="Web3" image={web3card} link='/learn/web3/'></Card>

              <Card title="DeFi" image={deficard} link=''></Card>

              <Card title="NFTs" image={nftscard} link=''></Card>

              <Card title="DAOs" image={daocard} link=''></Card>

              <Card title="Metaverse" image={metaversecard} link=''></Card>

              <Card title="Music" image={musiccard} link=''></Card>
          </div>
        </div>
      

    </div>
  )
}

export default index
