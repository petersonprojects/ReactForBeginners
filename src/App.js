// importing css from public
import React from 'react';
import './css/global.scss';
// import {Container, Row, Col} from 'react-bootstrap';
import SingleSlide from './components/SingleSlide';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      example: 0
    }
  }

  render(){ 
    
    return( <div className="container">
	
    <div data-am-fadeshow="next-prev-navigation">
  
      {/* <!-- Radio --> */}
      <input type="radio" name="css-fadeshow" id="slide-1" />
      <input type="radio" name="css-fadeshow" id="slide-2" />
      <input type="radio" name="css-fadeshow" id="slide-3" />
  
      {/* <!-- Slides --> */}
      <div className="fs-slides">
        <SingleSlide/>
        <div className="fs-slide" style={{backgroundImage: "url(https://images.unsplash.com/photo-1440557653082-e8e186733eeb?crop=entropy&fit=crop&fm=jpg&h=1325&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2500)"}}></div>
        <div className="fs-slide" style={{backgroundImage: "url(https://images.unsplash.com/photo-1449057528837-7ca097b3520c?crop=entropy&fit=crop&fm=jpg&h=1325&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2500)"}}></div>
      </div>
  
      {/* <!-- Quick Navigation --> */}
      <div className="fs-quick-nav">
        <label className="fs-quick-btn" htmlFor="slide-1"></label>
        <label className="fs-quick-btn" htmlFor="slide-2"></label>
        <label className="fs-quick-btn" htmlFor="slide-3"></label>
      </div>
      
      {/* <!-- Prev Navigation --> */}
      <div className="fs-prev-nav">
        <label className="fs-prev-btn" htmlFor="slide-1"></label>
        <label className="fs-prev-btn" htmlFor="slide-2"></label>
        <label className="fs-prev-btn" htmlFor="slide-3"></label>
      </div>
      
      {/* <!-- Next Navigation --> */}
      <div className="fs-next-nav">
        <label className="fs-next-btn" htmlFor="slide-1"></label>
        <label className="fs-next-btn" htmlFor="slide-2"></label>
        <label className="fs-next-btn" htmlFor="slide-3"></label>
      </div>
  
    </div>
    
  </div>
    )
  };

}

export default App;
