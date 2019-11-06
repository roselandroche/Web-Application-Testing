import React from 'react';
import ChangeButton from './ChangeButton';

function Dashboard(props) {
    
    return (
        <div className='buttons'>
            {/* Buttons to increase strikes, balls, fouls, and hits */}
            <ChangeButton 
                name='Strike' 
                strikes={props.strikes} 
                updateStrikes={props.updateStrikes} 
                updateBalls={props.updateBalls}
                updateFouls={props.updateFouls}
                updateHit={props.updateHit}
            />
            <ChangeButton 
                name = 'Ball' 
                ball={props.balls} 
                updateStrikes={props.updateStrikes}
                updateBalls={props.updateBalls}
                updateFouls={props.updateFouls}
                updateHit={props.updateHit}
            />
            <ChangeButton 
                name='Foul' 
                foul={props.fouls} 
                strikes={props.strikes}
                updateFouls={props.updateFouls}
                updateStrikes={props.updateStrikes}
                updateBalls={props.updateBalls}
                updateHit={props.updateHit}
            />
            <ChangeButton 
                name='Hit' 
                hit={props.hit} 
                updateFouls={props.updateFouls}
                updateStrikes={props.updateStrikes}
                updateBalls={props.updateBalls}
                updateHit={props.updateHit}
            />
            {/* Cause updates and rerenders to Display */}
        </div>
    )
}

export default Dashboard;