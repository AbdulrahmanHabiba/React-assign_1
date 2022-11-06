import { render } from "@testing-library/react";
import { Component } from "react";
import Child from "../Clild/clild";

export default class Parent extends Component {
    state = {
        nameOfClass: "Parent",
        userName: "Abdulrahman",
        userAge: 22,
        people: [
            {
                name: "abdo",
                age: 22,
                gender: 'Male',
                wife: {
                    name: "Aya",
                    son: {
                        name: 'amgad',
                        age: 5
                    }
                }
            },
            {
                name: "ahmed",
                age: 19,
                gender: 'Male',
                wife: false
            }
            ,
            {
                name: "mohamed",
                age: 25,
                gender: 'Male',
                wife: {
                    name: "noor",
                    son: {
                        name: 'ssad',
                        age: 5
                    }
                }
            }
            ,
            {
                name: "kamel",
                age: 25,
                gender: 'Male',
                wife: {
                    name: "roroo",
                    son: {
                        name: 'ramy',
                        age: 7
                    }
                }
            }
            
            
        ]

       
    }
    render() {
        return <>
            <div className="container bg-dark">
                <div className="row">
                    {this.state.people.map((person) => <Child peopleData={person} />)}
                </div>
            </div>
        </>
    }
}