import React from 'react';
import '../css/global.scss';

const SingleSlide = (props) => {
    return (
        <>

            <div className="fs-slide" style={{backgroundImage: "url(/images/react.png"}}>

                <div className="opacity w-100 h-100" style={{backgroundColor: 'black'}}></div>

                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontFamily: 'Rockwell', textAlign: 'center', textShadow: '0 0 20px rgba(0,0,0,0.5)'}}>
                    <h1 style={{marginTop: '0', marginBottom: '0.8vw', fontSize: '5vw', fontWeight: 'bold'}}>React For Noobs</h1>
                    <p style={{fontSize: '2vw', fontWeight: '100', marginTop: '0'}}>by Micah Peterson from DigitalCrafts</p>
                </div>
                
            </div>

        </>
    )
}

export default SingleSlide
