import React from 'react'
import "./letterInput.css"

const LetterInput = (props: any) => {
  return (
    <input className='letterInput' maxLength={1} onChange={props.onChange} disabled={props.disabled} value={props.content} id={`name-${props.index}`} name={`name${props.index}`} ref={c => props.inputs[props.index] = c} />
  )
}

export default LetterInput