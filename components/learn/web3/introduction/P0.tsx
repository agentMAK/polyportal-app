import SplitView from "../../../elements/App/SplitView"
import web3 from '../../../../public/images/learn/web3/what-is-web3/web3future.jpeg'
import MainHeader from "../../../elements/MainHeader"
import SingleView from "../../../elements/App/SingleView"
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const P0 = (props:any) => {
    return (<main className='w-full h-full flex flex-col text-lg'>
        <MainHeader title="Web3">Introduction to Course</MainHeader>
          <LiteYouTubeEmbed 
              id="3_p3V4H4KFk"
              title="Introduction to Web3"
              poster="maxresdefault"
          />
          <br />
      </main>
    )
  }


export default P0

