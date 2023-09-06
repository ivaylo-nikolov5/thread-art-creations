import React, { useState } from 'react'

const SizesTable = (props) => {
    const [units, setUnits] = useState("cm");
    const sizes = props.sizes;
    const widths = props.widths;
    const heights = props.heights;

    const tableData = sizes.map((size, index) => (
        <tr key={index}>
        <td>{size}</td>
        <td>{units === "cm" ?  widths[index] : (widths[index] * 0.39).toFixed(1)}</td>
        <td>{units === "cm" ?  heights[index] : (heights[index] * 0.39).toFixed(1)}</td>
        </tr>
    ))


    return (
        <div className='sizes_table-container'>
            <div className='units-container'>
                <p className='unit-label'
                    onClick={() => setUnits("cm")}
                    style={{color: units === "cm" ? "#66FCF1" : "#fff"}}
                >CM</p>
                <p className='slash-size'>/</p>
                <p className='unit-label'
                    onClick={() => setUnits("inches")}
                    style={{color: units === "inches" ? "#66FCF1" : "#fff"}}
                >INCHES</p>
            </div>
             <table className='size-table'>
                <thead>
                <tr>
                    <th>Size</th>
                    <th>Width</th>
                    <th>Height</th>
                </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default SizesTable
