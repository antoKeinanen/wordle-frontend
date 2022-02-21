import React from 'react'
import "./Modal.css"


const GuideModal = (props) => {

  return (
    <>
      <div className="darkBG"/>
      <div className='centered'>
        <div className='modal'>
          <div className="modalHeader">
            <h2 className='heading'>Arvasit sanan oikein!</h2>
          </div>
          <div className="modalContent">
            <p>Oikea sana oli:</p> 
            <a href={`https://www.kielitoimistonsanakirja.fi/#/${props.word}` }rel="noreferrer" target="_blank">{props.word}</a>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className='deleteBtn' onClick={() => window.location.reload()}>Yritä uudelleen!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideModal