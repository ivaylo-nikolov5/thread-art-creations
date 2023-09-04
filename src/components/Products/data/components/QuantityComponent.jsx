import React from 'react'

const QuantityComponent = (props) => {
    
    function decrementQuantity() {
        if (props.selectedQuantity > 1) {
            props.setSelectedQuantity((prevCount) => prevCount - 1);
        }
    };    
    
    function incrementQuantity() {
        if (props.selectedQuantity < props.availableQuantity) {
            props.setSelectedQuantity((prevCount) => prevCount + 1);
        } else {
            alert(`Sorry, there are only ${props.availableQuantity} available products in the warehouse.`)
        }
    };

    return (
        <div className='counter'>
            <div className='minus-container' onClick={decrementQuantity}>
                <button className='decrement-btn'>
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>

            <div className='quantity-container'>
                {props.selectedQuantity}
            </div>
            
            <div className='plus-container' onClick={incrementQuantity}>
                <button className='increment-btn'>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default QuantityComponent
