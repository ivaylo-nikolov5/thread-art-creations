import React, { useEffect, useState } from 'react';
import colors from "../functions/colors"

const ColorComponent = (props) => {
    const [colors_, setColors_] = useState([]);

    useEffect(() => {
        try {
            const parsedColors = JSON.parse(props.colors);
            setColors_(parsedColors.colors);
            props.setSelectedColor(colors_[0]);
        } catch (error) {
            console.error('Error parsing colors:', error);
        }
    }, [props.colors_]);

    const parsedColors = colors_.map((color, index) => {
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
        </div>
    );
}

export default ColorComponent;
