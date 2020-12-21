import React from 'react';
import '../css/global.scss';

const ContentSlide = (props) => {
    console.log(props.url)
    return (
        <>

            <div className="fs-slide">

                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontFamily: 'Rockwell', textAlign: 'center', textShadow: '0 0 20px rgba(0,0,0,0.5)', width:'100%'}}>
                    <h1 style={{marginTop: '0', marginBottom: '0.8vw', fontSize: '5vw', fontWeight: 'bold'}}>{props.title}</h1>
                    <p style={{fontSize: '2vw', fontWeight: '100', marginTop: '0'}}>{props.content}</p>
                </div>

            </div>

        </>
    )
}

export default ContentSlide