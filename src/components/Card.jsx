import React from 'react';

const Card = ({ image, title, subtitle, description, children }) => (
  <div className="card">
    {image && <img src={image} alt={title} />}
    <div className="card-body">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{description}</p>
      {children}
    </div>
  </div>
);

export default Card;
