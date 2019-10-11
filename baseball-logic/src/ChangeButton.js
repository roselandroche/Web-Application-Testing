import React from 'react';

function ChangeButton(props) {

    function increaseStrike() {
        if(props.name === 'Strike' && props.strikes < 3) {
            props.updateStrikes(props.strikes+1)
            alert(`Strrrriiiikkkkeeee!`)
        } else if (props.name === 'Strike' && props.strikes === 3) {
            alert('YOU ARE OUT!')
            props.updateStrikes(0)
            props.updateBalls(0)
            props.updateFouls(0)
            props.updateHit(false)
        } else {
            console.log('There is a problem')
        }
    }
    return (
        <button onClick={increaseStrike}>{props.name}</button>
    )
}

export default ChangeButton;