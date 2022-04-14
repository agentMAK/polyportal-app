

const MainHeader = (props:any) => {
    return (
      <div className='mt-6 w-full text-center'>
              <p className='text-primary text-3xl font-sans-medium mb-2'>{props.title}</p>
              <p>{props.children}</p>
            </div>        
    )
  }
  
  export default MainHeader
  