import type { NextPage } from 'next'
import doorway from '../public/images/doorway.png'
import Image from 'next/image'
import uniswap from '../public/images/uniswap-grants.png'
import polygon from '../public/images/Polygon-logo.svg'
import NavBar from '../components/elements/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex flex-col items-center max-w-screen-lg mx-auto text-center">
        <h1 className='text-7xl mt-20 mb-8 font-sans-medium'>Learn and explore <br/> Web3</h1>
        <p className="mb-8">Join our live instructor-led workshops teaching  <br/> the basics of Web3 for beginner&apos;s on <span className="text-primary font-sans-semibold">Polygon</span></p>
        <p className="mb-12">Next Cohort:<br/> <span className="text-primary font-sans-medium">Saturday 19th March 2022 - 20:00 UTC /15:00 EST</span></p>
        <form className='flex mb-12' action="https://static.mailerlite.com/webforms/submit/r5s7m5" data-code="r5s7m5" method="post" target="_blank">
        <input className="w-52 border-solid border-b border-primary mr-5 active:border-none" aria-label="email" aria-required="true" type="email" data-inputmask="" name="fields[email]" autoComplete="email" placeholder='Enter your email' required />
        <button className='py-4 px-6 bg-primary rounded-md text-white hover:bg-primary400'type="submit">Join the waitlist</button>
        </form>
        <div className='flex content-start mb-10'>
        <Image
                src={uniswap}
                alt="Uniswap Grants"
                height={55}
                width={86}
            />
        <Image
                src={polygon}
                alt="Polygon"
                height={40}
                width={128}
            />
        </div>
        <div className="mb-44">
          <Image
                  src={doorway}
                  alt="doorway"
                  layout='intrinsic'
           />
        </div>
        <div className="flex text-left w-full mb-32">
            <div className=" w-full">
              <h1 className="text-6xl font-sans-semibold">What is <span className="text-primary">POLYPORTAL</span>?</h1>
            </div>
            <div className=" w-full">
              <h2 className="text-4xl font-sans-medium">A Community Onboarding Platform into Web3 on Polygon.</h2>
              <br />
              <p>👋  Hi, I&apos;m <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/agentMAK_"><span className='text-blue-400 font-sans-medium'>@agentMAK</span></a>, creator of PolyPortal and we&apos;re building better experiences for new users to Web3
                <br /><br />
                We all know that Web3 onboarding kind of sucks. As it exists today, there isn&apos;t a platform out there that 
                I would recommend to my beginner Web2 friends trying to get into Web3. PolyPortal is our attempt to solve this 
                problem.
                <br /><br />
                Polygon has a vast ecosystem of both users and applications. Combined with low fees and faster transactions, 
                it&apos;s the perfect playground for new Web3 users 
                <br /><br />
                Our Introduction to Web3 course is designed for beginners wishing to understand 
                Web3 and how to use it. </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
