import React from 'react';
import { useSelector } from 'react-redux';
import './BookTicketDetails.css';

const BookTicketDetails = () => {
    const bookTicketDetails = useSelector((state) => state.bookTicketDetails.bookTicketDetails)
    console.log(bookTicketDetails);
    const { name, airlinename, datetime, departure, arrival } = bookTicketDetails
    const dateTimeUpdated = new Date(datetime);
    // console.log(dateTimeUpdated.toLocaleString(), 'time');

    return (
        <>  
            <div className='bookticketDetails_card'>
                <div className='bookticket_card_name'>
                    <h2>Name: {name}</h2>    
                </div>
                <div className='bookticket_card_airline'>
                    <p>Airline: {airlinename}</p>
                    <p>Date and Time: {dateTimeUpdated.toDateString()} {dateTimeUpdated.toLocaleTimeString()}</p>
                </div>
                <div className='bookticket_card_departure'>
                    <p>Departure Location: {departure}</p>
                    <p>Arrival Location: {arrival}</p>
                </div>
            </div>
        </>
    )
}

export default BookTicketDetails