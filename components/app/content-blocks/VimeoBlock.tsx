import ReactPlayer from "react-player"
const VimeoBlock = (props:any) => {

    return <ReactPlayer
    url={`https://vimeo.com/${props.id}`}
    width="448px"
  />
  }
  
export default VimeoBlock
