import Image from 'next/image'
import Link from 'next/link'

const LongCard = (props:any) => {
    let displayCard

    if(props.status == 'disabled') {
      displayCard = <div className="group flex flex-col first:rounded-xl shadow-md w-[175px] opacity-40">
      <Image
            src={props.image}
            alt="metamask"
            height={235}
            width={375}
        />
      <div className="flex flex-col justify-center rounded-br-xl rounded-bl-xl h-[55px] mt-[-2px] w-full text-center bg-white ">
        {/* <div className="bg-primary h-full w-full m-4"></div> */}
        <p className='font-sans-semibold text-[15px] text-primary'>{props.title}</p>
      </div>
    </div>
    } else {
      displayCard = <div className="flex flex-col md:flex-row items-center w-full rounded-xl bg-primary">
      <div className=" h-full md:w-2/5 w-full p-7">
      <Image
          src={props.image}
          alt="metamask"
          height={188}
          width={300}
          layout="responsive"
          priority={true}
      />
      </div>
      <div className="flex flex-col h-full md:w-3/5 pb-7 md:p-7 text-center md:text-left">
          <div className="h-full text-white">
            <p className="font-sans-semibold text-2xl mb-1">{props.title}</p>
            <p className="text-xl mb-4">{props.time}</p>
              <ul className="list-disc ml-3 text-[15px] md:w-3/4">
                {props.children}
            </ul>
          </div>
          <div className="flex md:justify-end justify-center">
          <Link href={props.link}><a>
          <button className="bg-white h-12 w-32 rounded-md font-sans-medium mt-5 md:mt-0 text-primary hover:bg-primary400 hover:text-white">Start Course</button>
          </a></Link>
          </div>
      </div>
    </div>
    }

    return displayCard
  }
  
  export default LongCard
  
  
 LongCard.defaultProps = {
  status:'active'
}
