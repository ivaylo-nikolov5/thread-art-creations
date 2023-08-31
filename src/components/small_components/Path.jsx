import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

import "../../styles/ProductsStyles/path.css"

const Breadcrumb = ({ items }) => {
  return (
    <div className="path-container">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="slash"> / </span>}
          {item.link ? (
            <Link to={item.link} className='path-link'>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
