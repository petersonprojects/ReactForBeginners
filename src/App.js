import React from 'react';
import './css/global.scss';
import './css/global.css';
import {data} from './data.js';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import PictureSlide from './components/PictureSlide';

class App extends React.Component {

  constructor()
  {
    super();

    this.state = {
      data: data,
      jsxMap: [],
      page: 0
    }
  }

  componentDidMount = () => {
    // when the page is mounted, created the large jsx map of slides
    this.mapSlides()
  }

  handleKey = (e) => {
    if (e.code === 'ArrowRight' || e.code === 'ArrowUp')
    {
      if(this.state.page < this.state.jsxMap.length - 1)
      {
        this.setState({page: this.state.page + 1})
      }
    }
    if (e.code == 'ArrowLeft' || e.code === 'ArrowDown')
    {
      if(this.state.page > 0)
      {
        this.setState({page: this.state.page - 1})
      }
    }
  }

  increment = () => {
    if(this.state.page < this.state.jsxMap.length - 1)
    {
      this.setState({page: this.state.page + 1})
    }
  }

  decrement = () => {
    if(this.state.page > 0)
    {
      this.setState({page: this.state.page - 1});
    }
  }

  mapSlides = () => {
    let jsx = this.state.data.map((slide) => {

      let opacity;

      if(slide.opacity !== undefined)
      {
        opacity = slide.opacity;
      }

      if(slide.type === 'title')
      {
        return <TitleSlide key={slide.id} title={slide.title} subtitle={slide.subtitle} url={slide.URL} opacity={opacity}/>
      }
      else if(slide.type === 'content')
      {
        return <ContentSlide key={slide.id} title={slide.title} content={slide.content} bullets={slide.bullets}/>
      }
      else if(slide.type === 'picture')
      {
        return <PictureSlide key={slide.id} url={slide.URL}/>
      }

    });

    this.setState({jsxMap: jsx});
  }

  createPrev = () => {
    return this.state.data.map(item => <label className="fs-prev-btn" onClick={()=>this.decrement()} key={item.id*4} htmlFor={`slide-${item.id}`}></label>)
  }

  createNext = () => {
    return this.state.data.map(item => <label className="fs-next-btn" onClick={()=>{this.increment()}} key={item.id*5} htmlFor={`slide-${item.id}`}></label>)
  }

  render(){ 
    return( <div className="container">
	
              <div data-am-fadeshow="next-prev-navigation">
              
                {/* Slides */}
                <div className="fs-slides" onKeyDown={this.handleKey} tabIndex="0">
                  {this.state.jsxMap[this.state.page]}
                </div>

            
                {/* Previous Arrow */}
                <div className="fs-prev-nav">
                  {this.createPrev()}
                </div>

                {/* Next Arrow */}
                <div className="fs-next-nav">
                  {this.createNext()}
                </div>
            
              </div>
            </div>
    )
  };

}


  
      // {/* Radios */}
      // {/* {this.createRadios()} */}

      // <div className="fs-quick-nav">
      //   {this.createNavs()}
      // </div>
// createNavs = () => {

//   let jsx = this.state.data.map(item => {

//     return <label key={item.id*2} className="fs-quick-btn" htmlFor={`slide-${item.id}`}></label>
//   })

//   return jsx;
// }
// createRadios = () => {

//   let jsx = this.state.data.map(item => {

//     return <input type="radio" key={item.id*3} name="css-fadeshow" id={`slide-${item.id}`} />
//   })

//   return jsx;
// }

export default App;
