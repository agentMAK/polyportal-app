import Link from "next/link"

const LinkBlock = (props:any) => {

    let link = props.children

    if (props.newTab == true) {
      link = <a href={props.link} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline"> {link} </a>
    } else {
      link = <Link href={props.link}><a className="text-primary-500 hover:underline">{link}</a></Link>
    }

    return ( 
        link
    )
  }
  
export default LinkBlock 

LinkBlock.defaultProps = {
  newTab:true
}
