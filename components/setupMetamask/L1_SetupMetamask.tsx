import Link from "next/link"

const L1_SetupMetamask = (props:any) => {
        return (<div>
            <h1>Lesson 1</h1>  
            <br /> <br />
            <Link href="/learn/web3" passHref><button>Complete Lesson</button></Link>
            <br /> <br />
            <button onClick={(e) => props.prevLesson()}>Prev Lesson</button>
        </div>
        )
      }

export default L1_SetupMetamask