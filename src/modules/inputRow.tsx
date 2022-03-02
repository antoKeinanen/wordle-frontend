import React, { ChangeEvent, HtmlHTMLAttributes } from 'react'
import CheckWord from "../helpers/checkWord"
import LetterInput from './letterInput';
import "./inputRow.css"

const InputRow = (props: any) => {
  let inputs: HTMLInputElement[] = [];
  let btn:HTMLButtonElement;

  const checkWord = () => {
    let ans = "";
    inputs.forEach(e => {
      ans += e.value.toLocaleLowerCase()
    });
    

    if(ans.length !== 5 || ans.match(new RegExp("[^a-zåäö]", "g"))){
      return
    }

    props.setUsed(props.used + 1)

    const res = CheckWord(props.word, ans)

    let correct = true;
    
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if(element !== 2){
        correct = false
      }
      
    }

    if(correct){    
      props.success(true)
    }

    btn.disabled = true

    res.map((n, i) => {
      let input = inputs[i]
      input.disabled = true
      switch (n) {
        case 1:
          input.className += " wrong_place"
          break;
        case 2:
          input.className += " correct_place"
          break;

        default:
          input.className += " wrong_letter"
          break;
      }
    })

  }

  const handleInputChange = (e: ChangeEvent) => {
    let input:any = e.target
    let next = input.nextElementSibling as HTMLElement
    
    if(next && input.value.length >= 1){
      next.focus()
    }
        
  }

  return (
    <div className='inputRow'>
      {["", "", "", "", ""].map((e, i) => <LetterInput onChange={handleInputChange} index={i} key={i} inputs={inputs}/>)}
      <button onClick={checkWord} ref={c => btn = c}>Arvaa</button>
    </div>
  )
}

export default InputRow