import Image from 'next/image'
import lesson from '../../public/images/icons/lesson.svg'
const SubLesson = (props: any) => { 
    return (
      <div className="flex flex-row py-2 w-full border-b-gray-200 border-b md:text-left text-center items-center">
        <div className="mx-5 h-[18px] w-[18px]"><Image
                  alt="..."
                  src={lesson}
                  width={18}
                  height={18}
                  layout="fixed"
                /></div>
              <p className="">{props.children}</p>
            </div>
    )
}

export default SubLesson
