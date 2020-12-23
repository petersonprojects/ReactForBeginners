import React from 'react';
import '../css/global.scss';
import '../css/global.css';
import Bullet from './Bullet'
import {Row, Button} from 'react-bootstrap';

const ContentSlide = (props) => {

    // let zIndie = props.id * -100;

    let bulletsArray = props.bullets;

    let jsxMap = bulletsArray.map(bullet => {

        return <Bullet bullet={bullet}/>
    })

    return (
        <>

        <div className="fs-slide" style={{paddingLeft:'100px', paddingRight:'100px', fontFamily:'Rockwell', fontWeight:'normal', overflowY:'scroll'}}>

                <Row className="justify-content-center">
                        <h1 style={{marginTop: '0.4em', marginBottom: '0.5em', fontSize: '4em', fontWeight: 'bold', textAlign: 'center'}}>{props.title}</h1>
                    </Row>

                    <Row> 
                        <ul style={{fontSize: '1.2em', fontWeight: '100', marginTop: '0'}}>{jsxMap}</ul>
                    </Row>

        </div>


        </>
    )
}

export default ContentSlide