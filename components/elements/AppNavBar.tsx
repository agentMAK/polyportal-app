import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/polyportalName.svg'
import twitter from '../../public/images/twitter.png'

const NavBar = (props:any) => {
    return (
    <div className="top-0 w-full text-center bg-primary100" >
      <div className="flex max-w-screen-lg mx-auto justify-between pt-8">
        <Link href="/" passHref><a>
        <Image
            src={logo}
            alt="Picture of the author"
            width={168}
            height={50}
        /></a></Link>
        <a href="https://twitter.com/PolyPortalHQ">
        <Image
            src={twitter}
            alt="Picture of the author"
            height={50}
        /></a>
    </div>
    <h1 className="text-3xl font-sans-semibold mt-5 p-5">{props.children}</h1>
  </div>
    )
  }
  
  export default NavBar
  