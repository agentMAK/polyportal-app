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
      displayCard = <div className="flex flex-row w-full h-72 rounded-xl bg-primary">
      <div className=" h-full w-2/5 p-7">
      <Image
          src={props.image}
          alt="metamask"
          height={188}
          width={300}
          layout="responsive"
      />
      </div>
      <div className="flex flex-col h-full w-3/5 p-7">
          <div className="h-full text-white">
            <p className="font-sans-semibold text-2xl mb-1">{props.title}</p>
            <p className="text-xl mb-4">{props.time}</p>
            <p className="text-[15px] list-decimal w-3/4">
              <ul className="list-disc ml-3">
                {props.children}
            </ul></p>
          </div>
          <div className="flex justify-end">
          <Link href={props.link}><a>
          <button className="bg-white h-12 w-32 rounded-md font-sans-medium text-primary hover:bg-primary400 hover:text-white">Start Course</button>
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
