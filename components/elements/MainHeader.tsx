

const MainHeader = (props:any) => {
    return (
      <div className="w-full py-12 text-center">
          <p className="font-sans-semibold text-[28px] text-primary600">{props.children}</p>
        </div>
    )
  }
  
  export default MainHeader
  