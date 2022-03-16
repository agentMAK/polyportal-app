import type { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../../components/NavBar'
import { useState } from 'react'
import L1_SetupMetamask from '../../../components/setupMetamask/L1_SetupMetamask'
import L0_SetupMetamask from '../../../components/setupMetamask/L0_SetupMetamask'

const SetupMetamask: NextPage = () => {

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
  
  return (
    <div>
      <NavBar></NavBar>
      {lessonPages[lesson].value}
      {lesson}
    </div>
  )
}

export default SetupMetamask
