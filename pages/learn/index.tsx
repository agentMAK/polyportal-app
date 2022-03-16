import type { NextPage } from 'next'
import Link from 'next/link'
import Card from '../../components/elements/card'
import MainHeader from '../../components/elements/MainHeader'
import NavBar from '../../components/elements/NavBar'
import metamaskCard from '../../public/images/metamaskCard.png'

const index: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto text-left">
        <MainHeader>Learn Web3</MainHeader>
        <div className="flex flex-row w-full flex-wrap justify-around lg:justify-between">

            <Card title="Introduction to Web" image={metamaskCard} link='/learn/web3/'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.
            </Card>

            <Card title="Introduction to Web" image={metamaskCard} link='/learn/web3/'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.
            </Card>

            <Card title="Introduction to Web" image={metamaskCard} link='/learn/web3/'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mus ut ornare felis pharetra, eu in a tortor. Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.
            </Card>
           </div>
      </div>

    </div>
  )
}

export default index
