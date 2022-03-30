import React, { Component } from "react";
import randomColor from "randomcolor";
import copy from "clipboard-copy";

export default class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: [],
            bgColor2: [],
            bgColor3: []
        };
    }
    clickHandler = (event) => {
        copy(this.state.bgColor);
        copy(this.state.bgColor2);
        copy(this.state.bgColor3);
        let color = randomColor();
        let color2 = randomColor();
        let color3 = randomColor();
        this.setState({
            bgColor: color,
            bgColor2: color2,
            bgColor3: color3
        });
    };

    componentDidMount() {
        this.clickHandler();
    }

    render() {
        return (
            <>
                <div className="divOuter">
                    <div style={{ backgroundColor: this.state.bgColor }} className="App text-center">First color</div>
                    <div style={{ backgroundColor: this.state.bgColor2 }} className="App text-center">Second Color</div>
                    <div style={{ backgroundColor: this.state.bgColor3 }} className="App text-center">Third color</div>
                    <button className="btn btn-primary" onClick={this.clickHandler}>Next</button>
                    <button className="btn btn-danger" onClick={this.clickHandler}>Previous</button>
                </div>
            </>
        );
    }
}
