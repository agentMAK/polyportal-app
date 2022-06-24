import styled from "@emotion/styled"
import React, { useState } from "react";
import { css } from '@emotion/react';

// eslint-disable-next-line react/display-name
const CardBlock = React.forwardRef((props: any, ref: any) => {
  
  let height = "fit"
  let align = "top"
  let textAlign = 'left'

  if(props.layout === 'screen') {
    height = "screen"
    align = "center"
  }

  if(props.layout === 'auto'){
      height = "fit"
      align = "top"
    if(props.isCurrent) {
      height = "screen"
      align = "top"
    }
  }

  if(props.layout === 'focus'){
    height = "screen"
    align = "center"
    textAlign = "center"
  }

  let block = <div css={card({ height, align, textAlign })} ref={ref}>{props.children}</div>

  return block
});


export default CardBlock

const card = ({height, align, textAlign} : {height:any, align:any, textAlign:any}) => css`
  width: 100%;
  padding-top: 20px;
  height: 100%;
  
  ${height === 'screen' &&
  `
    min-height: calc(100vh - 80px);
  `}

  ${align === 'center' &&
  `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}

${textAlign === 'center' &&
  `
  text-align: center;
  `}
`;

CardBlock.defaultProps = {
  layout:'fit'
}