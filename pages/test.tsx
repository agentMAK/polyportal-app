import type { NextPage } from 'next'
import Meta from '../components/meta'
import SingleView from '../components/elements/App/SingleView'

const Home: NextPage = () => {
  return (
    <div>
      <Meta></Meta>
      <SingleView><p className="text-primary text-3xl leading-relaxed mt-52">You&#39;re all signed up 🎉 <br className='my-10' /><span className='text-xl'>You should recieve an invitation email soon</span></p></SingleView>
    </div>
  )
}

export default Home
