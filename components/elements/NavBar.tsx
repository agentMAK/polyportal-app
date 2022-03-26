import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/images/polyportalName.svg'
import twitter from '../../public/images/twitter.png'
import {useRouter} from 'next/router'

const NavLink = (props:any) => {
  let navlink
  if(props.isActive) {
    navlink = <Link href={props.link} passHref><a className='my-auto'>
       <div className='flex justify-center bg-white w-[65px] h-[23px] rounded-lg my-auto ml-[px] shadow-md'><p className='my-auto '>{props.children}</p></div>
       </a></Link>
  } else {
    navlink = <Link href={props.link} passHref><a className='my-auto'>
    <div className='flex justify-center w-[65px] h-[23px] rounded-lg my-auto ml-[px]'><p className='my-auto '>{props.children}</p></div>
    </a></Link>
  }

  if(props.inActive) {
    navlink = <a className='my-auto'>
    <div className='flex justify-center w-[65px] h-[23px] rounded-lg my-auto ml-[px] opacity-50'><p className='my-auto select-none'>{props.children}</p></div>
    </a>
  }

  return navlink
}

NavLink.defaultProps = {
  isActive:false,
  inActive:false
}

const NavBar = () => {
  const router = useRouter()
  const navPath = '/learn'

    return (
      <div className="top-0 w-full" >
          <div className="flex justify-between px-6 py-2">
            <Link href='/learn' passHref><a className='p-0 m-0 flex'>
            <Image
                src={logo}
                alt="Picture of the author"
                width={108}
                height={32}
            /></a>
            </Link>
            <nav className='flex flex-row justify-around bg-primary300 rounded-xl w-60 h-8 justify-self-center ml-[-76px] text-xs font-sans-semibold text-primary700'>
              <NavLink link='/access' inActive={true} isActive={navPath.startsWith('/access')} >Access</NavLink>
              <NavLink link='/learn'  isActive={navPath.startsWith('/learn')}>Learn</NavLink>
              <NavLink link='/explore' inActive={true} isActive={navPath.startsWith('/explore')}>Explore</NavLink>
            </nav>
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
  