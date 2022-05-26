const SubLesson = (props: any) => { 
    return (
      <div className="py-2 w-full border-b-gray-200 border-b md:text-left text-center ">
              <p className="md:ml-[63px]">{props.children}</p>
            </div>
    )
}

export default SubLesson
