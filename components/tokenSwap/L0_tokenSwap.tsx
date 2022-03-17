import AppHeader from "../elements/App/AppHeader"
import SplitView from "../elements/App/SplitView"
import uniswapLogo from '../../public/images/uniswaplogo.svg'

const L0_SetupMetamask = (props:any) => {
    return (<main className='w-full h-full flex flex-col'>
        <AppHeader title="Visit Uniswap">Uniswap is the most popular decentralized exchange in Crypto. It allows users anywhere in the world to trade crypto without an intermediary.</AppHeader>
        <SplitView image={uniswapLogo}>
              <p className='text-xl'>To swap a token on Uniswap, visit:</ p>
            <br />
            <a href="https://app.uniswap.org/#/swap?chain=polygon" target="_blank" rel="noopener noreferrer" className='text-xl font-sans-semibold text-primary hover:underline'>https://app.uniswap.org/</a></SplitView>
      </main>
    )
  }


export default L0_SetupMetamask

