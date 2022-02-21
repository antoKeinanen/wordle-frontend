import React from 'react'
import "./Modal.css"


const GuideModal = (props) => {

  return (
    <>
      <div className="darkBG"/>
      <div className='centered'>
        <div className='modal'>
          <div className="modalHeader">
            <h2 className='heading'>Voi harmi!</h2>
          </div>
          <div className="modalContent">
            <h4>Et arvannut sanaa oikein!</h4>
            <p>Oikea vastaus olisi ollut:</p>
            <a href={`https://www.kielitoimistonsanakirja.fi/#/${props.word}`} rel="noreferrer" target="_blank">{props.word}</a>
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