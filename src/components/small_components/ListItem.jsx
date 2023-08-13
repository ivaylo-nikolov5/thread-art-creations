import React from "react";
import "../../styles/HomeStyles/company-info.css";

function ListItem(props) {
    return (
        <li className="service-item">
            <i class="fa-solid fa-chevron-right"></i>
            {props.text}
        </li>
    );
};

export default ListItem;