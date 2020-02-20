/* eslint-disable react/prop-types */
import React from 'react';

import './card.styles.css';

const Card = (props) => {
  const { monster } = props;
  const { name, email, id } = monster;
  return (
    <div className="card-container">
      <img alt="minster" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2>
        {name}
      </h2>
      <p>
        {email}
      </p>
    </div>
  );
};

export default Card;
