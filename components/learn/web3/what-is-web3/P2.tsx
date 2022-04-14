import SplitView from "../../../elements/App/SplitView"
import web2 from '../../../../public/images/learn/web3/what-is-web3/web2.png'
import MainHeader from "../../../elements/MainHeader"

const P2 = (props:any) => {
    return (<main className='w-full h-full flex flex-col'>
        <MainHeader title="Web2">Web2 </MainHeader>
        <SplitView image={web2}>
              <p className='text-xl font-sans-semibold'>Web3 is the next generation of the internet</ p>
              <p className=''>Let’s start by looking at how evolution of Web3</ p>
        </SplitView>
      </main>
    )
  }


export default P2

