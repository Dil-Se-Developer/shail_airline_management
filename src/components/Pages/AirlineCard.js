import React from 'react';
import './AirlineCard.css';

const AirlineCard = ({ airlineFilterData }) => {
    const { id, logo, name, country, established } = airlineFilterData;
    return (
        <div className='airlinecard'>
            <img src={logo} alt="airlineimg" />
            <h2>{name}</h2>
            <h3>{country}</h3>
            <p>{established}</p>
        </div>
    )
}

export default AirlineCard