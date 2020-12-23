import React from 'react';

const PictureSlide = (props) => {

    return (
    <>
        <div className="fs-slide d-flex align-items-center justify-content-center" style={{position:'absolute', backgroundColor:'#002855', width:'100%'}}>
            <img src={props.url} style={{width:'95%'}} alt={props.url}/>
        </div>
    </>
    )
}

export default PictureSlide
