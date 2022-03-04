import React from "react";
import "./styles/Modal.css";

const GuideModal = (props) => {
  return (
    <>
      <div className="darkBG" />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h2 className="heading">Arvasit sanan oikein!</h2>
          </div>
          <div className="modalContent">
            <p>Oikea sana oli:</p>
            <a
              href={`https://www.kielitoimistonsanakirja.fi/#/${props.word}`}
              rel="noreferrer"
              target="_blank"
            >
              {props.word}
            </a>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="deleteBtn"
                onClick={() => window.location.reload()}
              >
                Yritä uudelleen!
              </button>
              <button
                className="deleteBtn"
                onClick={() =>
                  fetch(
                    "https://wordle-fi.netlify.app/.netlify/functions/report?word=" +
                      props.word,
                    { mode: "cors" }
                  ).then(() => window.location.reload())
                }
              >
                Ilmoita sana!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideModal;
