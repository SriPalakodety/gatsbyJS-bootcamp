import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
    let styles = {
        listStyleType: 'none'
    }
    return (
        <header>
            <h1>Nav bar</h1>
            <nav>
                <ul style={styles}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header;