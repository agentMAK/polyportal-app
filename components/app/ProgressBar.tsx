import leftArrow from '../../public/images/icons/leftArrow.svg'
import rightArrow from '../../public/images/icons/rightArrow.svg'
import Image from 'next/image'

const ProgressBar = (props:any) => {

    return <div className="flex flex-row w-fit gap-x-3">
        <button className="my-auto w-6 h-6" onClick={props.previousSlide}>
        <Image
            src={leftArrow}
            height={24}
            width={24}
            alt=""
        /></button>

        <div className="h-2 rounded-2xl bg-slate-200 w-[384px] my-auto">
            <div style={{ width: `${props.percentageDone}%` }}>
                <div className={"h-2 bg-primary rounded-2xl w-full"}></div>
            </div>
        </div>

        <button className="my-auto w-6 h-6" onClick={props.nextSlide}>
        <Image
            src={rightArrow}
            height={24}
            width={24}
            alt=""
        /></button>
  </div>
  }
  
export default ProgressBar
