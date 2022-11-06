import { render } from "@testing-library/react";
import { Component } from "react";

export default class Child extends Component {

    render() {
        let { name, age, gender } = this.props.peopleData;
    return <>
      
        <div className="col-md-4 bg-danger p-1 m-1">
        <h1>my name is <p className="bg-info">{name}</p> </h1>
       <h2>my age is <p className="bg-info">{age}</p></h2>
        <h3>Gender <p className="bg-info">{gender}</p></h3>
      </div>
        

    </>
}
    
}