import React, { Component } from 'react';
import "./Tour.css"
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showInfo:false
         }
   
    }

    showinfoChange = () =>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() { 
        const {name , info, img , city} = this.props.tour
        return ( 
            <main className="App-1">
                <article className="tour tour1">
                <div className="container">
                    <img src={img} alt=""/>
                    <span className="close">
                        <i className="fa fa-window-close" ></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                  <h5> 
                      {this.state.showInfo &&  <p>{info}</p>}
                      info{''} 
                      <span className="view-details" onClick={this.showinfoChange}>
                      <i className="fa fa-angle-down"></i>
                      </span>
                  </h5>
                </div>
            </article>
            </main>
         );
    }
}
 
export default Single;