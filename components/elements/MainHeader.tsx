

const MainHeader = (props:any) => {
    return (
      <div className="text-left  w-full my-7">
          <h1 className="text-3xl font-sans-semibold">{props.children}</h1>
        </div>
    )
  }
  
  export default MainHeader
  