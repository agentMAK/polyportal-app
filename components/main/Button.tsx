import Link from "next/link"

const Button = (props:any) => {

    let button = <button className=' bg-white w-80 h-11 text-primary border border-primary text-base shadow font-sans-medium rounded-md hover:bg-primary100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
    if(props.variant != 'light') {
      button = <button className=' bg-primary w-80 h-11 text-white text-base font-sans-medium rounded-md hover:bg-primary400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
    }

    if (props.size == 's') {
      button = <button className=' bg-white px-5 h-9 text-primary border border-primary text-sm shadow font-sans-medium rounded-md hover:bg-primary100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
      if(props.variant != 'light') {
        button = <button className=' bg-primary px-5 h-9 text-white text-sm font-sans-medium rounded-md hover:bg-primary400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
      }
    }

    if (props.size == 'm') {
      button = <button className=' bg-white py-[8px] px-[16px]  text-primary border border-primary text-base shadow font-sans-medium rounded-md hover:bg-primary100 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
      if(props.variant != 'light') {
        button = <button className=' bg-primary py-[8px] px-[16px] text-white text-base font-sans-medium rounded-md hover:bg-primary400 focus:drop-shadow-lg disabled:bg-slate-200 disabled:text-slate-500' onClick={(e) => props.onClick()}>{props.children}</button>
      }
    }


    if(props.link != undefined) {
      if (props.newTab == true) {
        button = <a href={props.link} target="_blank" rel="noopener noreferrer"> {button} </a>
      } else {
        button = <Link href={props.link} passHref>{button}</Link>
      }
    }

    return (button
    )
  }
  
  export default Button

 Button.defaultProps = {
    onClick: () => {},
    variant:'light',
    newTab: false
  }
  