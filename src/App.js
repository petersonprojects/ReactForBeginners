// importing css from public
import React from 'react';
import './css/global.scss';
// import {Container, Row, Col} from 'react-bootstrap';
import {data} from './data.js';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import PictureSlide from './components/PictureSlide';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: data
    }
  }

  mapSlides = () => {

    let jsx = this.state.data.map((slide) => {

      if(slide.type === 'title')
      {
        return <TitleSlide key={slide.id} title={slide.title} subtitle={slide.subtitle} url={slide.URL}/>
      }
      else if(slide.type === 'content')
      {
        return <ContentSlide key={slide.id} title={slide.title} content={slide.content}/>
      }
      else if(slide.type === 'picture')
      {
        return <PictureSlide key={slide.id} url={slide.URL}/>
      }

    })

    console.log(jsx)

    return jsx;
  }

  createNavs = () => {

    let jsx = this.state.data.map(item => {

      return <label key={item.id} className="fs-quick-btn" htmlFor={`slide-${item.id}`}></label>
    })

    return jsx;
  }
  createRadios = () => {

    let jsx = this.state.data.map(item => {

      return <input type="radio" name="css-fadeshow" id={`slide-${item.id}`} />
    })

    return jsx;
  }

  createPrev = () => {

    let jsx = this.state.data.map(item => {

      return <label className="fs-prev-btn" htmlFor={`slide-${item.id}`}></label>
    })

    return jsx;
  }

  createNext = () => {
    let jsx = this.state.data.map(item => {

      return <label className="fs-next-btn" htmlFor={`slide-${item.id}`}></label>
    })

    return jsx;
  }

  render(){ 

    return( <div className="container">
	
    <div data-am-fadeshow="next-prev-navigation">
  
      {/* <!-- Radio --> */}
      
      {this.createRadios()}
  
      {/* <!-- Slides --> */}
      <div className="fs-slides">
        {this.mapSlides()}
      </div>
  
      {/* <!-- Quick Navigation --> */}
      <div className="fs-quick-nav">
        {this.createNavs()}
      </div>
      
      {/* <!-- Prev Navigation --> */}
      <div className="fs-prev-nav">
        {this.createPrev()}
      </div>
      
      {/* <!-- Next Navigation --> */}
      <div className="fs-next-nav">
        {this.createNext()}
      </div>
  
    </div>
    
  </div>
    )
  };

}

export default App;
