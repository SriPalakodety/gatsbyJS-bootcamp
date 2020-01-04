import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout>   
            <h1>About Page</h1>
            <h4>This is a About page</h4>
            <p>Go to contact page <Link to='/contact'>Contact Page</Link></p>
        </Layout>
    )
}

export default AboutPage;