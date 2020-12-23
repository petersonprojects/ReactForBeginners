// importing css from public
import React from 'react';
import './css/global.scss';
import './css/global.css';
// import {Container, Row, Col} from 'react-bootstrap';
import {data} from './data.js';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import PictureSlide from './components/PictureSlide';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: data,
      jsxMap: [],
      page: 0
    }
  }

  componentDidMount = () => {

    this.mapSlides()
  }

  increment = () => {

    {/* put an onClick for the next arrow */}

    if(this.state.page < this.state.jsxMap.length - 1)
    {
      this.setState({
        page: this.state.page + 1 
      }, ()=>console.log(this.state.page))
    }
    
  }

  decrement = () => {

    {/* put an onClick for the next arrow */}
    if(this.state.page > 0)
    {
      this.setState({
        page: this.state.page - 1 
      }, ()=>console.log(this.state.page))
    }

    
  }

  mapSlides = () => {

    let jsx = this.state.data.map((slide) => {

      if(slide.opacity !== undefined)
      {
        var opacity = slide.opacity;
      }

      if(slide.type === 'title')
      {
        return <TitleSlide key={slide.id} title={slide.title} subtitle={slide.subtitle} url={slide.URL} opacity={opacity}/>
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

    this.setState({
      jsxMap: jsx
    }, ()=>console.log(this.state.jsxMap))

  }

  createNavs = () => {

    let jsx = this.state.data.map(item => {

      return <label key={item.id*2} className="fs-quick-btn" htmlFor={`slide-${item.id}`}></label>
    })

    return jsx;
  }
  createRadios = () => {

    let jsx = this.state.data.map(item => {

      return <input type="radio" key={item.id*3} name="css-fadeshow" id={`slide-${item.id}`} />
    })

    return jsx;
  }

  createPrev = () => {
    let jsx = this.state.data.map(item => <label className="fs-prev-btn" onClick={()=>this.decrement()} key={item.id*4} htmlFor={`slide-${item.id}`}></label>)
    return jsx;
  }

  createNext = () => {
    let jsx = this.state.data.map(item => {

      return <label className="fs-next-btn" onClick={()=>{this.increment()}} key={item.id*5} htmlFor={`slide-${item.id}`}></label>
    })


    return jsx;
  }

  render(){ 
    return( <div className="container">
	
    <div data-am-fadeshow="next-prev-navigation">
  
      {/* Radios */}
      {/* {this.createRadios()} */}
  
      {/* Slides */}
      <div className="fs-slides">
        {/* {this.mapSlides()} */}
        {this.state.jsxMap[this.state.page]}
        {/* {this.createIntro()} */}
      </div>

  
      {/* Navigation */}
      <div className="fs-quick-nav">
        {/* {this.createNavs()} */}
      </div>
      <div className="fs-prev-nav">
        {this.createPrev()}
      </div>
      <div className="fs-next-nav">
        {this.createNext()}
      </div>
  
    </div>
    
  </div>
    )
  };

}

export default App;
