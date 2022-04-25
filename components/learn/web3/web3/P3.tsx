import SplitView from "../../../elements/App/SplitView"
import whatweb3 from '../../../../public/images/learn/web3/what-is-web3/whatweb3.png'
import MainHeader from "../../../elements/MainHeader"

const P3 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">What is Web3?</MainHeader>
        <SplitView image={whatweb3}>
              <p className='text-xl font-sans-semibold'>So, What&apos;s Web3</ p>
              <p className=''>There are many definitions of Web3 that exist out there.</ p>
              <br />
              <p>
              We are going to break down Web3 to its most fundamental definition for you.
              </p>
        </SplitView>
      </main>
    )
  }


export default P3

