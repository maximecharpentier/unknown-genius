import React, { Component } from 'react';

class MapLegend extends Component {
    componentDidMount = () => {
        
    }
    
    render() {
        return <div className="MapLegend">
            <div className="MapLegend__container">
                <span className="MapLegend__text">Most laureats</span>
                <span className="MapLegend__text">Least laureats</span>
            </div>
            <div className="MapLegend__jauge"></div>
        </div>
    }
}

export default MapLegend;