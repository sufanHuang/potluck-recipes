import React, { Component } from 'react'
import club from "../../images/cooking-club.jpg"

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-info header">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO THE COOKING CLUB</h1>
                    </div>
                </div>
                <div className="imageBox">
                    <img src={club} alt="club"/>
                </div>
            </div>
        )
    }
}

export default Landing
