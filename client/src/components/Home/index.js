import React, { Component } from 'react'
import club from "../../images/cooking-club.jpg"

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5 bg-info header">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO POTLUCK RECIPES</h1>
                    </div>
                </div>
                <div className="imageBox">
                    <img src={club} alt="club"/>
                </div>
            </div>
        )
    }
}

export default Home
