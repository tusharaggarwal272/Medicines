import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5'}}>
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginLeft:'1rem',marginTop:'1rem'}}>MEDICINES</h1></Link>
            </div>
        )
    }
}
export default Navbar