import React from 'react';

function Contacte(props) {
    return (
        <div>Contact</div>
    )
}

class Contact extends React.Component {
    render()
    {
        return (
            <div>
                {Contacte()}
                <a href="/User/">Back</a>
            </div> 
            
        )
    }
}

module.exports = Contact;