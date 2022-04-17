import SplitView from "../../../elements/App/SplitView"
import aave from "../../../../public/images/learn/web3/exploring-web3/aave.png";
import MainHeader from "../../../elements/MainHeader"

const P3 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Aave</MainHeader>
        <SplitView image={aave}>
        <p className="text-xl">
          Aave is a DeFi protocol for lending and borrowing cryptocurrencies
        </p>
        <br />
        <p className="text-xl">
          Try it out at: 
          <a
            href="https://app.aave.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-sans-semibold text-primary hover:underline"
          > app.aave.com
          </a>
        </p>
        </SplitView>
      </main>
    )
  }


export default P3

