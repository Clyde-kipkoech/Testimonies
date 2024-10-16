import React from "react";
import Testimonies from "../DATA/testimonials.json"
import {v4 as id} from "uuid"
function Runner(){
    return( 
        <div className="container">
            <h1 className="heading">**TESTIMONIES***</h1>
            {Testimonies.map(testimonies => (
                <div className="testimonies">
                    <div>
                        <img src={testimonies.image} className="image"/>
                    </div>
                    <div>
                    <h2 className="testimonies-name">Name{testimonies.name}</h2>
                    <p><i>Date{testimonies.date}</i></p>
                    <p><i>Role{testimonies.role}</i></p>
                    <p><i>Testimony{testimonies.testimony}</i></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Runner;