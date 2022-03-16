import Button from "../elements/Button"

const L0_SetupMetamask = (props:any) => {
    return (<div>
        <p>Lesson 0</p> 
        <br /> <br />
        <Button variant='dark' onClick={() => props.nextLesson()}>Next Lesson</Button>
        <br /> <br />
        <Button onClick={() => props.prevLesson()}>Prev Lesson</Button>
    </div>
    )
  }


export default L0_SetupMetamask

