import SplitView from "../../../elements/App/SplitView"
import web3 from '../../../../public/images/learn/web3/what-is-web3/web3future.jpeg'
import MainHeader from "../../../elements/MainHeader"

const P0 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Web3 </MainHeader>
        <SplitView image={web3} margin='10'>
              <p className='text-xl font-sans-semibold'>Web3 is the next generation of the internet</ p>
              <p className=''>Let&apos;s explore the world of Web3</ p>
        </SplitView>
      </main>
    )
  }


export default P0

