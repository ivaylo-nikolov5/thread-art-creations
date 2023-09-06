import React from 'react'

const ProductDescription = (props) => {
    return (
        <div className='description-container'>
            <p className='description-label'>Product Description:</p>
            <div>
                <p className="description-text">
                    {props.description}
                </p>
            </div>
            
        </div>
    )
}

export default ProductDescription
