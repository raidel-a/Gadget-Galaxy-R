import React from 'react';

function MenuItem({ name, price, detail, image }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1>${price}</h1>
      <h2>{name}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{detail}</p>
    </div>
  );
}

export default MenuItem;
