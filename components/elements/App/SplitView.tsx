import Image from 'next/image'

const SplitView = (props:any) => {
    return (
      <div className=' flex h-full'>
      <div className=' w-full flex justify-center items-center'>
        <div className='h-fit w-fit mx-16'>
        <Image
              src={props.image}
              alt="metamask"
              height={300}
              width={300}
          />
            </div>
      </div>
      <div className=' w-full flex justify-center items-center'>
        <div className='h-fit w-fit mx-16'>
          {props.children}
            </div>
      </div>
    </div>
    )
  }
  
  export default SplitView
  