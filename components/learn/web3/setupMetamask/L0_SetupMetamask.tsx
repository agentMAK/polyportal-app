import AppHeader from "../../../elements/App/AppHeader"
import SplitView from "../../../elements/App/SplitView"
import metamaskLogo from '../../../../public/images/metamaskFox.png'

const L0_SetupMetamask = (props:any) => {
    return (<main className='w-full h-full flex flex-col'>
        <AppHeader title="Installing Metamask">MetaMask is a popular browser-based wallet that makes it easy to use your Ethereum account. We are going install MetaMask to create and wallet and get you all set up. </AppHeader>
        <SplitView image={metamaskLogo}>
              <p className='text-xl'>You can download the MetaMask browser extention at: </ p>
            <br />
            <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className='text-xl font-sans-semibold text-primary hover:underline'>https://metamask.io/download</a></SplitView>
      </main>
    )
  }


export default L0_SetupMetamask

