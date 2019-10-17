import React, { Component } from 'react';
import "./Tour.css"
import Single from "./SingleTour"
import { tourData } from "../Data"
class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tours:tourData
         }
    }
    render() { 
       const {tours} = this.state
        return ( 
            <section>
             {
                 tours.map( tour => {
                     return(
                    <Single key={tour.id} tour={tour} />
                     )
                 })
             }
            </section>
         );
    }
}
 
export default Tour;