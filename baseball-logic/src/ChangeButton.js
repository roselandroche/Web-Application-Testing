import React from 'react';

function ChangeButton(props) {

    function increase() {
        if(props.name === 'Strike' && props.strikes < 3) {
            props.updateStrikes(props.strikes+1)
            alert(`Strrrriiiikkkkeeee!`)
        } else if (props.name === 'Strike' && props.strikes === 3) {
            alert('YOU ARE OUT!')
            props.updateStrikes(0)
            props.updateBalls(0)
            props.updateFouls(0)
            props.updateHit(false)
        } else if (props.name === 'Ball' && props.ball < 4) {
            alert('BALL!')
            props.updateBalls(props.ball + 1)
        } else if (props.name === 'Ball' && props.ball === 4) {
            alert('YOU ARE OUT!')
            props.updateStrikes(0)
            props.updateBalls(0)
            props.updateFouls(0)
            props.updateHit(false)
        } else if (props.name === 'Foul' && props.strikes < 2) {
            alert('Foul!')
            props.updateStrikes(props.strikes + 1)
        } else if(props.name === 'Hit') {
            alert('Hit!')
            props.updateStrikes(0)
            props.updateBalls(0)
            props.updateFouls(0)
            props.updateHit(false)
        } else {
            console.log('No change')
        }
    }



    return (
        <button className={'changeButton'} onClick={increase}>{props.name}</button>
    )
}

export default ChangeButton;