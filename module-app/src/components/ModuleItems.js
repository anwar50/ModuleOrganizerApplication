import React from "react";

const ModuleItems = (props) => {
    return(
        <div className="item">
            <div className="content">
                <h1><a className="header" href>{props.name}</a></h1>
                <div className="description"><h3>year :{props.year}</h3></div>
                <div className="description"><h3>coursework worth :{props.coursework} %</h3></div>
                 <div className="description"><h3>exam worth :{props.exam} %</h3></div>
            </div>
        </div>
    );
}


export default ModuleItems;