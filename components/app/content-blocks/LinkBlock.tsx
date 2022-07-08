import Link from "next/link"

const TextBlock = (props:any) => {

    return ( 
        <Link href={props.link}><a className="text-primary-500 hover:underline">{props.children}</a></Link>
    )
  }
  
export default TextBlock 
