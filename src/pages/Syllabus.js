import React, { Component } from "react";

class Syllabus extends Component {

    constructor() {
        super();
        this.state = {
            text:"THIS IS THE SYLLABUS FOR COURSE 01"
        };
    }
    render() {
        return (
            <div>
                <h2>Syllabus</h2>
                <div><p>{this.state.text}</p></div>
            </div>
        );
    }
}

export default Syllabus