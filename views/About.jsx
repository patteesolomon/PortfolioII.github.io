import React from 'react';

function Aboute(props) {
    return (
        <div>About</div>
    )
}

class About extends React.Component {
    render()
    {
        return (
            <div>
                {Aboute()}
                <a href="/User/">Back</a>
            </div> 
            
        )
    }
}


module.exports = About
