import React, { Component } from 'react';
import Header from '../Header.js';
import GivsWeek from './GivsWeek.js';

class AnalyticsPage extends Component {

    render() {
        return (
            <div>
                <Header merchant={this.props.merchant} logout={this.props.logout} />
                <GivsWeek />
                <ItemsWeek />
                <Footer />
            </div>
        );
    };

}
export default AnalyticsPage;