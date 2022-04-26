import React from 'react'

function Dialog({show,title,description,cancel,confirm}) {

    if(!show){
        return <>
        </>
    }
  return (
    <div>
        <div className="overlay">
          <div className="dialog">
           <div className="dialog__content">
             <h2 className="dialog__title">{title}</h2>
             <p className="dialog__description">
                 {description}
             </p>
            </div>
              <hr />
                <div className="dialog__footer">
                   <button className="dialog__cancel" onClick={cancel}>Cancel</button>
                   <button className="dialog__confirm" onClick={confirm}>Yes, delete it</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Dialog