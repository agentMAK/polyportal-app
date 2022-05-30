import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
var emoji = require('apple-color-emoji');

const Emoji = (props:any) => {

    const [image,setImage] = useState<String>('')

    useEffect(() => {
        //Runs only on the first render
        setImage(emoji.getImage(props.emoji))
    }, [props.emoji]);

    return (
     <img width={props.size} height={props.size} src={`/images/emojis${image}`} alt=""></img>
    )
  }
  
export default Emoji

Emoji.defaultProps = {
    size:'24'
  }
  