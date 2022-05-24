import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="output"> 0 </div>
        <div className="btns func"> AC </div>
        <div className="btns func"> +/- </div>
        <div className="btns func"> % </div>
        <div className="btns func"> ÷ </div>
        <div className="btns"> 7 </div>
        <div className="btns"> 8 </div>
        <div className="btns"> 9 </div>
        <div className="btns func"> X </div>
        <div className="btns"> 4 </div>
        <div className="btns"> 5 </div>
        <div className="btns"> 6 </div>
        <div className="btns func"> - </div>
        <div className="btns"> 1 </div>
        <div className="btns"> 2 </div>
        <div className="btns"> 3 </div>
        <div className="btns func"> + </div>
        <div className="btns"> 0 </div>
        <div className="btns"> . </div>
        <div className="btns func"> = </div>
      </div>
    );
  }
}
