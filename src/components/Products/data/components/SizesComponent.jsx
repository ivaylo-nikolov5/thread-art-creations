import React, { useEffect } from 'react'

const SizesComponent = (props) => {
    
    const parsedSizes = props.sizes.map((size, index) => {
        return <div className='size-container' 
                    key={index} 
                    onClick={() => props.setSelectedSize(size)}
                    style={{borderColor: props.selectedSize === size ? "#fff" : "#C5C6C7",
                            backgroundColor: props.selectedSize === size ? "#2f3c4d" : "transparent"}}
                >
                    <p
                        style={{color: props.selectedSize === size ? "#fff" : "#C5C6C7", margin: 0}}
                    >
                        {size.toUpperCase()}
                    </p>
                </div>
    })

    return (
        <div className='sizes'>
            <p className='size-label'>Size - {props.selectedSize}</p>
            <div className='parsed-sizes-container'>
                {parsedSizes}
            </div>
        </div>
    )
}

export default SizesComponent
