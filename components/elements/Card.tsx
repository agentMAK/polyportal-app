import Image from 'next/image'
import Link from 'next/link'

const Card = (props:any) => {
    return (<div>
      <div className="flex flex-col rounded-xl shadow-md w-72 mx-5 my-5 hover:border-2 hover:border-solid hover:border-primary">
        <Link href={props.link}><a>
          <Image
                src={props.image}
                alt="metamask"
                height={188}
                width={300}
            />
          <div className=" rounded-br-xl rounded-bl-xl h-16 w-full text-left">
            {/* <div className="bg-primary h-full w-full m-4"></div> */}
            <div className="p-4">
            <p className='font-sans-semibold text-primary mb-1'>{props.title}</p>
            <p className='text-xs'>{props.children}</p>
            </div>
          </div>
          </a></Link>
        </div>
      </div>
    )
  }
  
  export default Card
  