import React from 'react';
//const AssetC = require('../src/myS.js');

// this is for css stuff
// this workd XD
function Gite(props) {
    return (
        <div>
            <style jsx>
                {`
                    /* Basic styles */

                    *{
                        flex-wrap: wrap;
                    }
                    .root{
                        font-size: medium;
                    }
                    
                    .fontxl {
                        font-size: 72px; /* 1rem = 10px */
                    }
                    .primary{
                        color: rgb(51, 115, 252);
                    }
                    .bodys {
                        font-family: -apple-system, "Segoe UI", "Roboto", "Oxygen",
                        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                        sans-serif;
                        line-height: 1.6;
                        color: #333;
                        background-color: #fff;
                    }
                    
                    .aTag {
                        text-decoration: none;
                        color: #0070f3;
                    }
                    
                    .aTag:hover,
                    .aTag:focus {
                        text-decoration: underline;
                    }
                    
                    .hone, .Aych2, .Aych3, .Aych4, .Aych5, .Aych6 {
                        font-weight: 500;
                        line-height: 1.2;
                        margin-bottom: 1rem;
                    }
                    
                    .hone {
                        font-size: 3rem;
                    }
                    
                    .Aych2 {
                        font-size: 2.5rem;
                    }
                    
                    .Aych3 {
                        font-size: 2rem;
                    }
                    
                    .Aych4 {
                        font-size: 1.5rem;
                    }
                    
                    .Aych5 {
                        font-size: 1.25rem;
                    }
                    
                    .Aych6 {
                        font-size: 1rem;
                    }
                    
                    .para {
                        margin-bottom: 1.5rem;
                    }
                    
                    .str {
                        font-weight: 600;
                    }
                    
                    .emmet{
                        font-style: italic;
                    }
                    
                      /* Layout styles */
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 1rem;
                    }
                    
                    .row {
                        display: flex;
                        flex-wrap: wrap;
                        margin-right: -1rem;
                        margin-left: -1rem;
                    }
                    
                    .col {
                        flex: 0 0 100%;
                        max-width: 100%;
                        padding-right: 1rem;
                        padding-left: 1rem;
                    }
                `}
            </style>
            {/* Everything from styles goes down here 
            where the page will meet the viewer */}
            <h1 className={`fontxl`}>Git</h1>
        </div>
    )
}

class Git extends React.Component {
    render()
    {
        return (
            <div>
                {Gite()}
                <a href="/User/">Back</a>
            </div>
        )
    }
}

module.exports = Git;