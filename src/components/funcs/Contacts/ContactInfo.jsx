import React from 'react'

const ContactInfo = (props) => {
    return (
        <div className='contact-info-container'>
            <div className='contact-info-icon-container'>
                {props.icon}
            </div>

            <div className='contact-data-container'>
                <p className='contact-info-title'>{props.title}</p>

                {
                    props.data.map((text, idx) => {
                        return (
                            <p className='contact-data' key={idx}>{text}</p>
                        )
                    })
                }

            </div>
        
        </div>
    )
}

export default ContactInfo
