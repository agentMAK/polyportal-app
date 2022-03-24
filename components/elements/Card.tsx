import Image from 'next/image'
import Link from 'next/link'

const Card = (props:any) => {
    let displayCard

    if(props.status == 'disabled') {
      displayCard = <div className="group flex flex-col first:rounded-xl shadow-md w-[175px] opacity-40">
      <Image
            src={props.image}
            alt="metamask"
            height={188}
            width={300}
        />
      <div className="flex flex-col justify-center rounded-br-xl rounded-bl-xl h-[55px] mt-[-2px] w-full text-center bg-white ">
        {/* <div className="bg-primary h-full w-full m-4"></div> */}
        <p className='font-sans-semibold text-[15px] text-primary'>{props.title}</p>
      </div>
    </div>
    } else {
      displayCard = <Link href={props.link}><a>
      <div className="group flex flex-col first:rounded-xl shadow-md w-[175px]">
          <Image
                src={props.image}
                alt="metamask"
                height={188}
                width={300}
            />
          <div className="flex flex-col justify-center rounded-br-xl rounded-bl-xl h-[55px] mt-[-2px] w-full text-center bg-white group-hover:bg-primary group-hover:border-primary group-hover:border-solid group-hover:border-4 ">
            {/* <div className="bg-primary h-full w-full m-4"></div> */}
            <p className='font-sans-semibold text-[15px] text-primary group-hover:text-white'>{props.title}</p>
          </div>
        </div>
      </a></Link>
    }

    return (<div>
      {displayCard}
      </div>
    )
  }
  
  export default Card
  
  
 Card.defaultProps = {
  status:'active'
}
