
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/main/Button";
import dropdown from "../../public/images/icons/dropdown.svg"
import dropdownDisabled from "../../public/images/icons/dropdownDisabled.svg"
import Emoji from "./Emoji";



const LessonCard = (props: any) => {

  const [displayLessons, setDisplayLessons] = useState<boolean>(props.displayLessons)

  const toggleLesson = () => {
    setDisplayLessons(prevDisplayLesson => prevDisplayLesson ? false : true)
  }

    if(props.link == undefined) return (
      <div className="flex md:flex-row flex-col text-left w-full items-center justify-center border-b-gray-300 border-b last:border-0 py-5">
                <div className="flex-row justify-center w-20 md:flex hidden">
                  <Emoji emoji={props.emoji} size="32"/>
                </div>
              
                <div className="w-full md:px-0 px-10">
                    <a className="text-xl font-sans-semibold text-primary-900">
                      {props.title} 
                    </a>
                </div>
                <button className="flex-row justify-center w-20 md:flex hidden" onClick={toggleLesson}>
                <Image
                  alt="..."
                  src={dropdownDisabled}
                  width={40}
                  height={40}
                  layout="fixed"
                />
                </button>
              </div>
  
    )
  
  
    return (
      <div className="flex flex-row text-left w-full items-center justify-center border-b-gray-300 border-b last:border-0 py-5">
                <div className="flex-row justify-center w-20 md:flex hidden">
                  <Emoji emoji={props.emoji} size="32"/>
                </div>
                <div className="w-full md:pl-0 pl-10">
                    <a href={props.link} className="text-xl font-sans-semibold text-primary-900 hover:text-primary-500">
                      {props.title}
                    </a>
                </div>
                <div className="md:pr-0 pr-10">
                <Button size="s" link={props.link}>
                    Start
                  </Button>
                </div>
                <button className="flex-row justify-center w-20 md:flex hidden"onClick={toggleLesson}>
                <Image
                  alt="..."
                  src={dropdown}
                  width={40}
                  height={40}
                  layout="fixed"
                />
                </button>
              </div>
    );
  };

  export default LessonCard

// displayLesson removed
LessonCard.defaultProps = {
  displayLessons:false
  }
  