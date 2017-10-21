import React from 'react';
import partyPopper from '../assets/party-popper.jpg'

const timeSince = date => {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000 * 3600 * 24))
    let years = Math.floor(days / 365)
    days -= years * 365
    let months = Math.floor(days / 31)
    days -= months * 31

    return `${years} years, ${months} months, and ${days} days`
}

const AgeStats = props => {
    return (
        <div>
            <h3>{props.date}</h3>
            <h4>Congrats on {timeSince(props.date)}!</h4>
            <img src={partyPopper} alt="party-popper" className="party-popper" />
        </div>
    );
}

export default AgeStats;