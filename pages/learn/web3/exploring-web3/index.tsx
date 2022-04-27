import type { NextPage } from 'next'
import { useState } from 'react'
import P0 from '../../../../components/learn/web3/exploring-web3/P0'
import P1 from '../../../../components/learn/web3/exploring-web3/P1'
import P2 from '../../../../components/learn/web3/exploring-web3/P2'
import P3 from '../../../../components/learn/web3/exploring-web3/P3'
import P4 from '../../../../components/learn/web3/exploring-web3/P4'
import Button from '../../../../components/elements/Button'
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
    {key:0, value:<P0 nextLesson={nextLesson} prevLesson={prevLesson}></P0>},
    {key:1, value:<P1 nextLesson={nextLesson} prevLesson={prevLesson}></P1>},
    {key:2, value:<P2 nextLesson={nextLesson} prevLesson={prevLesson}></P2>},
    {key:3, value:<P3 nextLesson={nextLesson} prevLesson={prevLesson}></P3>},
    {key:4, value:<P4 nextLesson={nextLesson} prevLesson={prevLesson}></P4>}
  ]
  
  const isComplete = lesson == lessonPages.length-1
  const isFirstLesson = lesson == 0
  

  return (
    <div>
      <div className='h-screen'>
      <Meta title='PolyPortal - Exploring Web3'></Meta>
        <div className='m-auto h-full max-w-xs md:max-w-screen-md lg:max-w-screen-lg flex flex-col justify-between'>
          {lessonPages[lesson].value}
          <div className='w-full flex justify-between pb-10'>
           
            {isFirstLesson ? <br/> :  <Button onClick={prevLesson}>Previous</Button>}
            {isComplete ? <Button variant='dark' link='/learn/web3'>Complete Lesson</Button> : <Button variant='dark' onClick={nextLesson}>Next</Button>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Index