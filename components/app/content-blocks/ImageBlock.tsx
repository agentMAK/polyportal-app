
import Image from 'next/image'

const ImageBlock = (props:any) => {

    return ( <div className="block">
      <Image
              src={props.image}
              alt=""
              layout="responsive"
              priority={true}
              placeholder="blur"
          /></div>
    )
  }
  
export default ImageBlock
