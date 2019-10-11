import React, { useEffect } from 'react';

function Display(props) {
    return (
        <div>
            {/* Update when user records activity on Dashboard */}
            <h1>Ball Count: {props.ballCount}</h1>
            <h1>Strike Count: {props.strikeCount}</h1>
        </div>
    )
}

export default Display;