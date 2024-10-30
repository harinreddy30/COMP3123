import React, {Component} from "react";
//import React from "react";
class Greetings extends Component{
    render() {
        return (
            <div style={ {color:'white', backgroundColor:'black'} }>Greetings, {this.props.name}</div>
        )
    }
}

export default Greetings