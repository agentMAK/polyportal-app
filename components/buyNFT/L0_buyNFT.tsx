import AppHeader from "../elements/App/AppHeader"
import SplitView from "../elements/App/SplitView"
import openseaLogo from '../../public/images/openseaLogo.jpeg'

const L0_SetupMetamask = (props:any) => {
    return (<main className='w-full h-full flex flex-col'>
        <AppHeader title="Browse NFTS on Opensea">OpenSea is a decentralized peer-to-peer marketplace for buying, selling and trading rare digital goods, from gaming items to collectibles to art, which are built on non-fungible token (NFT) technology and run on the Ethereum/Polygon blockchain.  </AppHeader>
        <SplitView image={openseaLogo}>
              <p className='text-xl'>To buy a NFT on Opensea, visit: </ p>
            <br />
            <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer" className='text-xl font-sans-semibold text-primary hover:underline'>https://opensea.io/</a></SplitView>
      </main>
    )
  }


export default L0_SetupMetamask

