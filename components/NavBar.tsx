import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/polyportalName.svg'
import twitter from '../public/images/twitter.png'

const NavBar = () => {
    return (
      <div className="top-0 w-full" >
          <div className="flex max-w-screen-lg mx-auto justify-between pt-8">
            <Link href="/" passHref>
            <Image
                src={logo}
                alt="Picture of the author"
                width={168}
                height={50}
            /></Link>
            <Image
                src={twitter}
                alt="Picture of the author"
                height={50}
            />
        </div>
      </div>
    )
  }
  
  export default NavBar
  