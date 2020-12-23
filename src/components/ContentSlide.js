import React from 'react';
import '../css/global.scss';
import '../css/global.css';
import {Row, Button} from 'react-bootstrap';

const ContentSlide = (props) => {

    // let zIndie = props.id * -100;
    return (
        <>

        <div className="fs-slide" style={{paddingLeft:'100px', paddingRight:'100px', fontFamily:'Rockwell', fontWeight:'normal'}}>

                <Row className="justify-content-center">
                        <h1 style={{marginTop: '0.4em', marginBottom: '0.5em', fontSize: '4em', fontWeight: 'bold', textAlign: 'center'}}>{props.title}</h1>
                    </Row>

                    <Row> 
                        <p style={{fontSize: '1.2em', fontWeight: '100', marginTop: '0'}}>{props.content}</p>
                    </Row>

        </div>


        </>
    )
}

export default ContentSlide