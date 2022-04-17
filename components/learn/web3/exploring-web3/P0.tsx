import SplitView from "../../../elements/App/SplitView"
import web3 from "../../../../public/images/learn/web3/exploring-web3/web3apps.png";
import MainHeader from "../../../elements/MainHeader"

const P0 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Exploring Web3</MainHeader>
        <SplitView image={web3} margin='10'>
              <p className='text-xl font-sans-semibold'>There are over 7000+ dApps on Polygon</ p>
              <p className=''>Let&apos;s explore the most popular web3 apps</ p>
        </SplitView>
      </main>
    )
  }


export default P0

