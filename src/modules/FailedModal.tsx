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
            <a className='wordLink' href={`https://www.kielitoimistonsanakirja.fi/#/${props.word}`} rel="noreferrer" target="_blank">{props.word}</a>
            <p>Jos sana oli mielestäsi liian vaikea tai sopimaton voit tehdä siitä ilmoituksen.</p>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className='deleteBtn' onClick={() => window.location.reload()}>Yritä uudelleen!</button>
              <form name='report' data-netlify="true">
                <input hidden={true} type="text" name="word netlify" value={props.word}/>
                <button className='deleteBtn'>Ilmoita sana!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideModal