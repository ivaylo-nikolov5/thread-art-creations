import React from 'react'
import Popup from 'reactjs-popup';
import "../../styles/HomeStyles/subscribe-popup.css"

const SubscribePopup = () => {
  return (
    <Popup trigger={
        <button className="newsletter-subscribe-btn">
            <i class="fa-solid fa-envelope"></i>    
            Subscribe
        </button>} 
        position="right center">
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header"> Success </div>
                <div className="content">
                    Thank you!
                    You have successfully subscribed to our newsletter.
                </div>
            </div>
            )}
    </Popup>
  )
}

export default SubscribePopup