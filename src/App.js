import { Component } from "react";
import { About } from "./componants/About/About.jsx";
import Child from "./componants/Clild/clild.jsx";
import Parent from "./componants/Parent/parent.jsx";
import Slider from "./componants/Slider/Slider.jsx";
export default class App extends Component {
  state = {
  
  }
  render() {
    return <>
      <Parent />
    </>
  }
}