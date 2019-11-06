import React from 'react';

class CheerButton extends React.Component{

    makeNoise = event => {
        event.preventDefault();
        return (
            alert('WOOOOOOOOOOOOOOOOOOOOOO!')
        )
    }

    render() {
        return (
            <button className='cheerButton' onClick={this.makeNoise}>
                MAKE SOME NOOOIIISSSEEE!!!
            </button>
        )
    }
}  

export default CheerButton;