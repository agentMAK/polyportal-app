import Image from 'next/image'

const SingleView = (props:any) => {
    return (
      <main className='w-full h-full flex flex-col'>
        <div className=' flex h-full'>
        <div className=' w-full flex justify-center items-center'>
          <div className='h-fit w-fit mx-16 text-center'>
            {props.children}
              </div>
        </div>
      </div>
      </main>
    )
  }
  
  export default SingleView
  