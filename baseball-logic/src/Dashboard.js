import React from 'react';
import ChangeButton from './ChangeButton';

function Dashboard(props) {

    // function increaseStrike() {
    //     if(props.name === 'Strike' && props.strikes < 3) {
    //         props.updateStrikes(props.strikes++)
    //         alert(`Strrrriiiikkkkeeee!`)
    //     } else if (props.name === 'Strike' && props.strikes === 3) {
    //         alert('YOU ARE OUT!')
    //         props.updateStrikes(0)
    //         props.updateBalls(0)
    //         props.updateFouls(0)
    //         props.updateHit(false)
    //     }
    // }
    
    return (
        <div className='buttons'>
            {/* Buttons to increase strikes, balls, fouls, and hits */}
            <ChangeButton 
                name='Strike' 
                value={props.strikes}
                strikes={props.strikes} 
                updateStrikes={props.updateStrikes} 
                updateBalls={props.updateBalls}
                updateFouls={props.updateFouls}
                updateHit={props.updateHit}
                // onClick={() => console.log('hi')}
            />
            <ChangeButton 
                name = 'Ball' 
                ball={props.balls} 
                updateBalls={props.updateBalls}
                // onClick={}
            />
            <ChangeButton 
                name='Foul' 
                foul={props.fouls} 
                updateFouls={props.updateFouls}
                // onClick={}
            />
            <ChangeButton 
                name='Hit' 
                hit={props.hit} 
                updateHit={props.updateHit}
                // onClick={}
            />
            {/* Cause updates and rerenders to Display */}
        </div>
    )
}

export default Dashboard;