import React, { useEffect, useRef, useState } from "react";
import  "./void.css"
import  "./stars-two.css"
import HeroImage from '../../assets/img/planet-3.png';


function Void(){
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('February 01 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our time
                clearInterval(interval.current);
            } else {
                //update our times
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div id="void">

                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

            <div className="message">
            <img src={HeroImage} alt="metamask logo"></img>
            <h2>Coming soon</h2>
            <div className="timer">
                <div className="days space">
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </div>
                <div className="hours space">
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </div>
                <div className="mins space">
                    <p>{timerMinutes}</p>
                    <p><small>Mins</small></p>
                </div>
                <div className="secs space">
                    <p>{timerSeconds}</p>
                    <p><small>Secs</small></p>
                </div>
            </div>
            </div>
        </div>
      );
}

export default Void;
