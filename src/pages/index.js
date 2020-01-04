import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer';
import Header from '../components/Header';
import Layout from "../components/layout";

const IndexPage = () => {

    return (
        <Layout>
            <h1>Hello</h1>
            <h4>This is from first edit of gatsby tutorial :)</h4>
            <p>Need a developer <Link to='/contact'>Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;