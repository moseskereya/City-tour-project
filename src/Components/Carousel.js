import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Carousel2 extends Component {
    state = { 
        name1:"Tour1",
        name2:"Tour2",
        name3:"Tour3",
        name4:"Tour4",
        name5:"Tour5",
        name6:"Tour6",
     }
    render() { 
        return ( 
            <div>
                <Carousel className="carausel" >
                    <div className="body-carousel">
                        <img src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name1}</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name2}</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/327337/pexels-photo-327337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name3}</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name4}</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/3061224/pexels-photo-3061224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name5}</p>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                        <p>{this.state.name6}</p>
                    </div>
                </Carousel>
            </div>
         );
    }
}
 
export default Carousel2;