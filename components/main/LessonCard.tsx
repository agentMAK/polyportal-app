
import Image from "next/image";
import Button from "../../components/main/Button";
import dropdown from "../../public/images/icons/dropdown.svg"
import dropdownDisabled from "../../public/images/icons/dropdownDisabled.svg"



const LessonCard = (props: any) => {

    if(props.link == undefined) return (
      <div className="flex md:flex-row flex-col text-center md:text-left w-full items-center justify-center border-b-gray-300 border-b last:border-0 py-5">
                <div className="flex-row justify-center w-20 md:flex hidden">
                <Image
                  alt="..."
                  src={dropdownDisabled}
                  width={40}
                  height={40}
                  layout="fixed"
                />
                </div>
                <div className="w-full">
                    <a className="text-xl font-sans-semibold text-primary-900">
                      {props.children} 
                    </a>
                </div>
                <div className="w-1/6 md:block hidden">
                </div>
              </div>
  
    )
  
  
    return (
      <div className="flex md:flex-row flex-col text-center md:text-left w-full items-center justify-center border-b-gray-300 border-b last:border-0 py-5">
                <div className="flex-row justify-center w-20 md:flex hidden">
                <Image
                  alt="..."
                  src={dropdown}
                  width={40}
                  height={40}
                  layout="fixed"
                />
                </div>
                <div className="w-full">
                    <a href={props.link} className="text-xl font-sans-semibold text-primary-900 hover:text-primary-500">
                      {props.children}
                    </a>
                </div>
                <div className="w-1/6 md:block hidden">
                <Button size="s" link={props.link}>
                    Start
                  </Button>
                </div>
              </div>
    );
  };

  export default LessonCard