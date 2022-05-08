import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const Card = (props:any) => {
    let displayCard

    if(props.status == 'disabled') {
      displayCard = <div className="flex flex-col h-[380px] w-[300px] bg-white rounded-xl p-5 group drop-shadow-md opacity-50">
      <div className='h-fit w-fit rounded-t-xl overflow-hidden'>
      <Image
            src={props.image}
            alt="image"
            width={280}
            height={175}
          /></div>
      <p className="text-xl text-primary font-sans-semibold pt-5">{props.title}</p>
      <p className="font-sans-medium text-sm pt-1 pb-8">{props.children}</p>
      <Button size='s'>Coming Soon</Button>

    </div>
    } else {
      displayCard = <div className="flex flex-col h-[380px] w-[300px] bg-white rounded-xl p-5 group drop-shadow-md hover:drop-shadow-2xl">
      <div className='h-fit w-fit rounded-t-xl overflow-hidden'>
      <Image
            src={props.image}
            alt="image"
            width={280}
            height={175}
          /></div>
      <p className="text-xl text-primary font-sans-semibold pt-5">{props.title}</p>
      <p className="font-sans-medium text-sm pt-1 pb-8">{props.children}</p>
      <Button size='s' link={props.link}>Start Course</Button>

    </div>
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
