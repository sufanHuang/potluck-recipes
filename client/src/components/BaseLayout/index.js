import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class BaseLayout extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )


        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample10"
                        aria-controls="navbarsExample10"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-md-center"
                        id="navbarsExample10"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item" >
                                {localStorage.usertoken ? (
                                        <Link to="/recipes" className="nav-link">
                                            recipes
                                        </Link>) :
                                    <Link to="/errorpage" className="nav-link">
                                        recipes
                                    </Link>
                                }
                            </li>
                        </ul>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>

                <div className='footer'>
                    <nav className='navbar justify-content-md-center'>
                     <p> @2019 Copyright Sufan Huang</p>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(BaseLayout)

