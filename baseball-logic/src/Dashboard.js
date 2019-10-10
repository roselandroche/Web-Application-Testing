import React from 'react';
import ChangeButton from './ChangeButton';

function Dashboard(props) {
    
    return (
        <div className='buttons'>
            {/* Buttons to increase strikes, balls, fouls, and hits */}
            <ChangeButton strikes={props.strikes} updateStrikes={props.updateStrikes} />
            <ChangeButton balls={props.balls} updateBalls={props.updateBalls}/>
            <ChangeButton fouls={props.fouls} updateFouls={props.updateFouls}/>
            <ChangeButton hit={props.hit} updateHit={props.updateHit}/>
            {/* Cause updates and rerenders to Display */}
        </div>
    )
}

export default Dashboard;