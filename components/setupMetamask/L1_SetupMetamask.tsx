import Link from "next/link"
import Button from "../elements/Button"

const L1_SetupMetamask = (props:any) => {
        return (<div>
            <h1>Lesson 1</h1>  
            <br /> <br />
            <Button variant='dark' link='/learn/web3'>Complete Lesson</Button>
            <br /> <br />
            <Button onClick={() => props.prevLesson()}>Prev Lesson</Button>
        </div>
        )
      }

export default L1_SetupMetamask