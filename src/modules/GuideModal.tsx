import React from 'react'
import "./Modal.css"


const GuideModal = ({ setIsOpen }) => {

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className="modalHeader">
            <h2 className='heading'>Säännöt</h2>
          </div>
          <div className="modalContent">
            <p>Arvaa sana! Sinulla on kuusi yritystä.</p>
            <p>Sana on suomenkielinen viisi kirjaiminen sana.</p>
            <p>Kirjoita sanan kirjaimet vaakasuuntaisiin ruutuihin ja paina submit.</p>
            <p>Voit aina katsoa ohjeita kilkkaamalla kysymysmerkki nappia.</p>
            <hr style={{margin: "5px"}}></hr>
            <h4 style={{margin: "5px"}}>Esimerkit:</h4>
            <p>Sana sisältää kirjaimen K.</p>
            <br />
            <div className="letterBlocks">
              <input disabled={true} className="letterInput_ correct" value="k"/>
              <input disabled={true} className="letterInput_ " value="i"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ " value="a"/>
            </div>
            <p>Sana sisältää kirjaimen I, mutta se ei ole oikealla paikalla.</p>
            <br />
            <div className="letterBlocks">
              <input disabled={true} className="letterInput_ " value="k"/>
              <input disabled={true} className="letterInput_ place" value="i"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ " value="a"/>
            </div>
            <p>Sana ei sisällä kirjainta A.</p>
            <br />
            <div className="letterBlocks">
              <input disabled={true} className="letterInput_ " value="k"/>
              <input disabled={true} className="letterInput_ " value="i"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ " value="s"/>
              <input disabled={true} className="letterInput_ letter" value="a"/>
            </div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className='deleteBtn' onClick={() => setIsOpen(false)}>Selvä!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideModal