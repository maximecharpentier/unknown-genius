import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "",
            mapClass: "Nav__button",
            tlClass: "Nav__button"
        }
    }
    componentDidMount() {
        this.setState({ page: window.location.pathname.replace('/', '')}, () => {
            switch (this.state.page) {
                case 'map':
                    console.log('map page')
                    this.setState({
                        mapClass: "Nav__button Nav__button--active",
                        tlClass: "Nav__button"
                    })
                    break;
                case 'timeline':
                    console.log('tl page')
                    this.setState({
                        mapClass: "Nav__button",
                        tlClass: "Nav__button Nav__button--active"
                    })
                    break;
                default:
                    break;
            }
        })
    }
    render() {
        return <nav className="Nav">
            <Link className={this.state.mapClass} to="/map">
                <span className="Nav__icon Nav__icon--map"></span>
                <span className="Nav__text">Map</span>
            </Link>
            <Link className={this.state.tlClass} to="/timeline">
                <span className="Nav__icon Nav__icon--timeline"></span>
                <span className="Nav__text">Timeline</span>
            </Link>
        </nav>
    }
}

export default Nav;