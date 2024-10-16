import React from "react";
import Students from "../DATA/Students.json";
import {v4 as id} from "uuid"

function Card() {
    return (
        <div className="card-container" key={id}>
            {Students.map( student => (
                <div className="card">
                    
                    <div>
                        <img src={student.image} alt={student.name} className="student-img"/>
                    </div>
                    <div>
                        <h3 className="student-course">Web Development</h3>
                        <p className="name">{student.name}</p>
                        <p><i className="student-age">{student.age}</i></p>
                        <p><i className="student-email">{student.email}</i></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;