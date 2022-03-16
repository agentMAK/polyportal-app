import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import L1_SetupMetamask from '../../../components/setupMetamask/L1_SetupMetamask'
import L0_SetupMetamask from '../../../components/setupMetamask/L0_SetupMetamask'
import NavBar from '../../../components/elements/NavBar'
import AppNavBar from '../../../components/elements/AppNavBar'
import Button from '../../../components/elements/Button'
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
      <div className='h-screen flex flex-col'>
        <AppNavBar></AppNavBar>
        <div className='m-auto h-full max-w-screen-lg flex flex-col'>
          <main className=' h-full'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis, enim id venenatis vestibulum, metus tortor porta tellus, et pharetra ipsum orci in dolor. Aenean convallis eu eros sit amet elementum. Donec porta eleifend ante, mattis laoreet lacus interdum id. Mauris pulvinar, enim non imperdiet sagittis, neque odio ullamcorper leo, vitae posuere lacus velit in est. Nullam quis mi eu massa finibus gravida at vel nunc. Mauris luctus orci luctus magna dignissim, eu rhoncus ex elementum. Donec convallis risus quis ante egestas, a molestie ante consectetur. Nulla iaculis sodales mauris, ac aliquam neque consequat sed. Sed pharetra diam ut arcu tempus, sed lacinia turpis blandit. Pellentesque sodales pellentesque dolor a semper. Duis congue, sapien nec tempor pulvinar, nunc lorem feugiat neque, vitae condimentum quam turpis eu enim. Etiam sem turpis, commodo nec ipsum eget, feugiat auctor ligula. In efficitur eleifend nibh, at facilisis tortor efficitur in. Proin efficitur ullamcorper volutpat. Nullam dui ex, convallis at finibus ac, varius sagittis velit.
            </p>
          </main>
          <div className='w-full flex justify-between mb-16'>
            <Button>Previous</Button>
            <Button variant='dark'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupMetamask
