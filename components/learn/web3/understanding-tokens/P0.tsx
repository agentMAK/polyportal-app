import SplitView from "../../../elements/App/SplitView"
import tokens from "../../../../public/images/learn/web3/understanding-tokens/tokens.png";
import MainHeader from "../../../elements/MainHeader"

const P0 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Understanding Tokens</MainHeader>
        <SplitView image={tokens} margin='10'>
              <p className='text-xl font-sans-semibold'>Tokens are intergal to Web3</ p>
              <p className=''>Let&apos;s explore what they are and how they work</ p>
        </SplitView>
      </main>
    )
  }


export default P0

