import Image from 'next/image'

const SplitView = (props:any) => {

    const imageProp = `h-full w-full relative`
    return (
      <div className='flex h-full mb-10'>
      <div className=' w-full flex justify-center items-center'>
        <div className={`h-full w-full relative mx-0 }`}>
        <Image
              src={props.image}
              alt=""
              layout="fill"
              objectFit='contain'
          />
            </div>
      </div>
      <div className=' w-full flex justify-center items-center'>
        <div className='h-fit w-fit ml-10'>
          {props.children}
            </div>
      </div>
    </div>
    )
  }
  
  export default SplitView
  