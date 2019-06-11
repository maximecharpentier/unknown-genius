import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Compare extends Component {
    render() {
        return <Link className="Compare" to="/comparator">
            <span className="Compare__icon"></span>
            <span className="Compare__text">Compare countries</span>
        </Link>
    }
}

export default Compare;
