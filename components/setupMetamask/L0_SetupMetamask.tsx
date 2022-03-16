
const L0_SetupMetamask = (props:any) => {
    return (<div>
        <h1>Lesson 0</h1>  
        <br /> <br />
        <button onClick={(e) => props.nextLesson()}>Next Lesson</button>
        <br /> <br />
        <button onClick={(e) => props.prevLesson()}>Prev Lesson</button>
    </div>
    )
  }

  
  export default L0_SetupMetamask
  
