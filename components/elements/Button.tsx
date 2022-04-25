import { link } from "fs"
import Link from "next/link"

const Button = (props:any) => {

    let button = <button className=' bg-white px-5 py-2 text-primary text-lg shadow font-sans-medium rounded-md hover:bg-primary400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
    if(props.variant != 'light') {
      button = <button className=' bg-primary px-5 py-2 text-white text-lg font-sans-medium rounded-md hover:bg-primary400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
    }

    if(props.link != undefined) {
      button = <Link href={props.link} passHref>{button}</Link>
    }
    return (button
    )
  }
  
  export default Button

 Button.defaultProps = {
    onClick: () => {},
    variant:'light'
  }
  