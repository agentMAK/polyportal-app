import type { NextPage } from 'next'
import { useState } from 'react'
import L1_SetupMetamask from '../../../../components/learn/web3/setupMetamask/L1_SetupMetamask'
import L0_SetupMetamask from '../../../../components/learn/web3/setupMetamask/L0_SetupMetamask'
import Button from '../../../../components/elements/Button'
import AppNavBar from '../../../../components/elements/AppNavBar'
import Meta from '../../../../components/meta'

const Index: NextPage = () => {

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
    {key:0, value:<L0_SetupMetamask nextLesson={nextLesson} prevLesson={prevLesson}></L0_SetupMetamask>},
    {key:1, value:<L1_SetupMetamask nextLesson={nextLesson} prevLesson={prevLesson}></L1_SetupMetamask>},
  ]
  
  const isComplete = (lesson == lessonPages.length-1)
  const isFirstLesson = lesson == 0
  

  return (
    <div>
      <div className='h-screen'>
      <Meta title='PolyPortal - Setup a wallet using Metamask'></Meta>
        <div className='m-auto h-full md:max-w-screen-md lg:max-w-screen-lg flex flex-col justify-between'>
          {lessonPages[lesson].value}
          <div className='w-full flex justify-between pb-10'>
           
            {isFirstLesson ? <br/> :  <Button onClick={prevLesson}>Previous</Button>}
            {isComplete ? <Button variant='dark' link='/learn/web3/old'>Complete Lesson</Button> : <Button variant='dark' onClick={nextLesson}>Next</Button>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Index