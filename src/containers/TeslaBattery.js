import React from 'react';
import './TeslaBattery.css';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';

class TeslaBattery extends React.Component {
    render() {
        return (
            <form className= "tesla-battery">
                <h1>Ranger Per Charge</h1>
                <TeslaCar/>
                <TeslaNotice/>
            </form>
        )
    }
}

export default TeslaBattery;
