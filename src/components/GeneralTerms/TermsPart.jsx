import React from 'react'
import "../../styles/GeneralTermsStyles/general-terms.css"

const TermsPart = (props) => {
    return (
        <div className='terms-part-container'>
            <h2 className='terms-part-title'>{props.title}</h2>
            <p className='terms-part-text'>{props.text}</p>
        </div>
    )
}

export default TermsPart