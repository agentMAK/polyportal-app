import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/polyportalName.svg'
import twitter from '../../public/images/twitter.png'

const NavBar = () => {
    return (
      <div className="top-0 w-full" >
          <div className="flex justify-between px-6 py-2">
            
            <Image
                src={logo}
                alt="Picture of the author"
                width={108}
                height={32}
            />
            <a href="https://twitter.com/PolyPortalHQ">
            <Image
                src={twitter}
                alt="Picture of the author"
                height={32}
                width={32}
            /></a>
        </div>
      </div>
    )
  }
  
  export default NavBar
  