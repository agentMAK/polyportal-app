import Image from 'next/image'

const SplitView = (props:any) => {

    const imageProp = `h-full w-full relative`
    return (
      <div className='flex flex-col md:flex-row h-full'>
      <div className=' w-full md:h-auto h-96 mb-10 md:mb-0s flex justify-center items-center'>
        <div className={`h-full w-full relative`}>
        <Image
              src={props.image}
              alt=""
              layout="fill"
              objectFit='contain'
          />
            </div>
      </div>
      <div className=' w-full flex justify-center items-center'>
        <div className='h-fit md:mb-0 mb-40 w-fit md:ml-10'>
          {props.children}
            </div>
      </div>
    </div>
    )
  }
  
  export default SplitView
