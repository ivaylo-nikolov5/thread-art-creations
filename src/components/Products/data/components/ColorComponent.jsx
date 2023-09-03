import React, { useEffect, useState } from 'react';
import colors from "../functions/colors"

const ColorComponent = (props) => {
    

    const parsedColors = props.colors.map((color, index) => {
        return <div className='color-container' 
                    key={index} 
                    onClick={() => props.setSelectedColor(color)}
                    style={{backgroundColor: props.selectedColor === color ? "#fff" : colors[color]}}
                >
                    <div className='color-fill' style={{backgroundColor: colors[color]}}>
                    </div>
                </div>
    })

    return (
        <div className='colors-container'>
            <p>Color - {props.selectedColor}</p>
            {parsedColors}
            {/* {clrs} */}
        </div>
    );
}

export default ColorComponent;
