import SplitView from "../../../elements/App/SplitView"
import ideas from '../../../../public/images/learn/web3/what-is-web3/ideas.png'
import MainHeader from "../../../elements/MainHeader"

const P6 = (props:any) => {
    return (<main className='w-full h-full flex flex-col'>
        <MainHeader title="Web3">Web3 Core Ideas</MainHeader>
        <SplitView image={ideas}>
              <p className='text-xl font-sans-semibold'>Web3 is the next generation of the internet</ p>
              <p className=''>Let’s start by looking at how evolution of Web3</ p>
        </SplitView>
      </main>
    )
  }


export default P6

