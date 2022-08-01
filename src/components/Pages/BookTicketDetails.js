import React from 'react';
import { useSelector } from 'react-redux';
import { MdAirplaneTicket } from "react-icons/md";
import './BookTicketDetails.css';

const BookTicketDetails = () => {
    const bookTicketDetails = useSelector((state) => state.bookTicketDetails.bookTicketDetails)
    // console.log(bookTicketDetails);
    const { name, emailid, seats, airlinename, datetime, departure, arrival, passenger2, passenger3 } = bookTicketDetails
    const dateTimeUpdated = new Date(datetime);
    // console.log(dateTimeUpdated.toLocaleString(), 'time');

    return (
        <>  
            <div className='bookticketDetails_card'>
                <div className='bookticket_card_heading'>
                <MdAirplaneTicket size={'2rem'} style={{marginRight:'1rem'}}/>   <h1>Ticket Information</h1> <MdAirplaneTicket size={'2rem'} style={{marginLeft:'1rem'}}/>
                </div>
                <div className='bookticket_card_name'>
                    <h3>Passenger 1 : <span>{name}</span></h3>
                </div>
                {passenger2 && <div className='bookticket_card_name'>
                    <h3>Passenger 2 : <span>{passenger2}</span></h3>
                </div>}
                {passenger3 && <div className='bookticket_card_name'>
                    <h3>Passenger 3 : <span>{passenger3}</span></h3>
                </div>}
                <div className='bookticket_card_seats'>
                    <p>Email ID : <span>{emailid}</span></p>
                    <p>No. of Seats : <span>{seats}</span></p>
                </div>
                <div className='bookticket_card_airline'>
                    <p>Airline : <span>{airlinename}</span></p>
                    <p>Date and Time : <span>{dateTimeUpdated.toDateString()} {dateTimeUpdated.toLocaleTimeString()}</span></p>
                </div>
                <div className='bookticket_card_departure'>
                    <p>Departure Location : <span>{departure}</span></p>
                    <p>Arrival Location : <span>{arrival}</span></p>
                </div>
                
            </div>
        </>
    )
}

export default BookTicketDetails