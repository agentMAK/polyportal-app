import SplitView from "../../../elements/App/SplitView"
import opensea from "../../../../public/images/learn/web3/exploring-web3/opensea.png";
import MainHeader from "../../../elements/MainHeader"

const P3 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Opensea</MainHeader>
        <SplitView image={opensea}>
        <p className="text-xl">
        OpenSea is an NFT marketplace for buying and selling NFTs.
        </p>
        <br />
        <p className="text-xl">
          Try it out at: 
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-sans-semibold text-primary hover:underline"
          > opensea.io
          </a>
        </p>
        </SplitView>
      </main>
    )
  }


export default P3

