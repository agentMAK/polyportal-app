import type { NextPage } from 'next'
import { useState } from 'react'
import L1_SetupMetamask from '../../../components/setupMetamask/L1_SetupMetamask'
import L0_SetupMetamask from '../../../components/setupMetamask/L0_SetupMetamask'
import Button from '../../../components/elements/Button'
import AppNavBar from '../../../components/elements/AppNavBar'
import L0_tokenSwap from '../../../components/tokenSwap/L0_tokenSwap'
import L1_tokenSwap from '../../../components/tokenSwap/L1_tokenSwap'
import Meta from '../../../components/meta'

const TokenSwap: NextPage = () => {

  const nextLesson = () => {
    if(lesson < lessonPages.length-1) {
      setLesson((prevState) => (prevState + 1));
    }
  }

  const prevLesson = () => {
    if(lesson > 0 ) {
      setLesson((prevState) => (prevState - 1));
    }
  }

  const [lesson, setLesson] = useState(0)

  let lessonPages: Array<any> = [
    {key:0, value:<L0_tokenSwap nextLesson={nextLesson} prevLesson={prevLesson}></L0_tokenSwap>},
    {key:1, value:<L1_tokenSwap nextLesson={nextLesson} prevLesson={prevLesson}></L1_tokenSwap>},
  ]
  
  const isComplete = (lesson == lessonPages.length-1)
  

  return (
    <div>
      <div className='h-screen'>
        <Meta title='PolyPortal - Make a token swap on Uniswap'></Meta>
        <AppNavBar>Make a token swap on Uniswap</AppNavBar>
        <div className='m-auto h-full max-w-screen-lg flex flex-col justify-between'>
          {lessonPages[lesson].value}
          <div className='w-full flex justify-between mb-64'>
            <Button onClick={prevLesson}>Prev Lesson</Button>
            {isComplete ? <Button variant='dark' link='/learn/web3'>Complete Lesson</Button> : <Button variant='dark' onClick={nextLesson}>Next Lesson</Button>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenSwap
