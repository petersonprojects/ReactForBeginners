// importing css from public
import React from 'react';
import './css/global.scss';
// import {Container, Row, Col} from 'react-bootstrap';
import {data} from './data.js';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: data
    }
  }

  componentDidMount() {

    // make call to my data
    // dont modify original data, and get rid of this.state
    // data = [...this.state.data]

  }

  mapSlides = () => {

        
    // let titleSlides = this.state.data.filter(slide => {
    //   return slide.type === 'title'

    // })
    // let contentSlides = this.state.data.filter(slide => {
    //   return slide.type === 'title'

    // })

    let jsx = this.state.data.map((slide) => {

      if(slide.type === 'title')
      {
        return <TitleSlide key={slide.id} title={slide.title} subtitle={slide.subtitle} url={slide.URL}/>
      }
      else if(slide.type === 'content')
      {
        return <ContentSlide key={slide.id} title={slide.title} content={slide.content}/>
      }

    })

    console.log(jsx)

    return jsx;
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
        {this.mapSlides()}
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
