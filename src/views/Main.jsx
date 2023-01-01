
function Maine(props) {
    return ( 
        <div className='bgk'>
            <h1 className='fontxl primary container emmet'>
                Pattee Solomon</h1>
            <style jsx>
                {`
                    .bgk{
                        background-color: black;
                    }

                    .containerM{
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                        position: relative;
                        overflow: hidden;
                        min-height: 530px;
                        padding: 60px 0;
                    }
                    .overlay {
                        background-color: rgba(74, 74, 74, 0.3);
                        position: absolute;
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                    }

                    .fontxl {
                        font-size: 72px;
                    }
                    .primary{
                        color: rgb(51, 115, 252);
                    }
                    
                    .aTag {
                        text-decoration: none;
                        color: #0070f3;
                    }
                    
                    .aTag:hover,
                    .aTag:focus {
                        text-decoration: underline;
                    }

                    .p1{
                        margin-top: 0px;
                        flex-wrap: wrap;
                        display: flex;
                    }
                    
                    .summ{
                        font-size: 35px;
                        flex-wrap: wrap;
                        max-width: 350px;
                    }

                    p {
                        margin-bottom: 1.5rem;
                    }
                    
                    .sdr{
                        font-size: 1.125rem;
                    }

                    .offsmd{
                        -webkit-box-flex: 0px;
                    }

                    .visual{
                        width: 768px;
                    }

                    .fr{
                        float: right;
                        margin-left: auto;
                    }

                    .visualImage{
                        display: flex;
                        margin: 0 auto;
                        max-height: 100%;
                    }

                    .sdln{
                        font-weight: 700;
                        border-bottom: solid 1px;
                        transition: all 0.25s ease-in-out;
                    }
                    
                    .emmet{
                        font-style: italic;
                    }

                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 1rem;
                    }
                    
                    .colv {
                        -webkit-box-flex: 0;
                        max-width: 41.66667%;
                    }
                `}
            </style>
            <div className='containerM'>
                <div className='overlay'></div>
                <div className='container'>
                    <div className='row guy'>
                        <div className="colv offsmd visual fr">
                        <img src='https://media.licdn.com/dms/image/D5603AQFGN7Bk2-dXWw/profile-displayphoto-shrink_400_400/0/1672540192286?e=1678320000&v=beta&t=J08zW049WWPd_BR5pxyQ0FaoBk2-Jv3wwt1Yk3-PQ5s' className= "visualImage"/>
                    </div>
                        <div className='colv'></div>
                        <h1 className = "primary">You can call me Sol.</h1>
                        <p className='p1'>
                            <span className='p1 primary summ fontxl'>
                                A guy who just likes to make applications 
                                work and I love turning my ideas into reality.
                                I also like to help people from time to time.
                            </span>
                        </p>
                    </div>
                </div>
                </div>
            <a href="/User/" className='aTag container sdr'>Click Here For more</a>
        </div>
    )
}
// main is for the intro
const React = require('react');
function Main (){
        return (
            <div>
                {Maine()}
            </div>
        )
    }

export default Main;