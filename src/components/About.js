import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'


export default class About extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"white"}}>About</h1>
                   <Link to={"/contact"}>Contact</Link>
            </div>
        )
    }
}
