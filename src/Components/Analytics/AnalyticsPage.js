import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import GivsWeek from './GivsWeek.js';
import GivsMonth from './GivsMonth.js';
import ItemsWeek from './ItemsWeek.js';
import RecipientsWeek from './RecipientsWeek.js';
import RecipientsMonth from './RecipientsMonth.js';
import ItemsMonth from './ItemsMonth.js';
const cart = "/cart.png"


class AnalyticsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      givsWeekData:{},
      givsMonthData:{},
      itemWData:{},
      itemMData:{},
      recipientWData:{},
      recipientMData:{},
      current:1,
      error: null
    }
  }

  componentWillMount(){
    this.charts();
    this.getTransactions();
  }

  charts(){
  this.setState({
    givsWeekData :{
      labels: ['Friday', 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday' ],
      datasets: 
      [{
        data:[3,7,2,1,0,0,0],
        backgroundColor: [
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
          'rgba(120, 82, 155, 0.3)',
        ],
      }
    ]},
    givsMonthData :{
      labels: [ '3', '4', '5', '6', '7', '8', '9', '10', 
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1'],
      datasets: 
        [{
        data:[0,0,0,4,5,
          3,7,2,10,3,
          7,2,8,9,10,
          3,7,2,8,9,
          10,3,8,9,7,
          3,7,2,1,0],
        backgroundColor: [
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(54, 162, 235, 0.3)'
          ],
      }
    ]},
    itemWData: {
      labels: ['Banana', 'Pants', 'Coffee', 'Gloves', 'Kite'],
      datasets: 
      [{
        data:[8,8,2,8,2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)'
        ],
      }
    ]},
    itemMData: {
      labels: ['Bread', 'Potatoes', 'Coffee', 'Tea', 'Oranges'],
      datasets: 
      [{
        data:[9,8,2,8,2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)'
        ],
      }
    ]},
    recipientWData: {
      labels: ['Friday', 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      datasets: 
      [{
        label:'Unique recipients',
        data:[1,2,3,5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.3)'
        ],
      }
    ]},
    recipientMData: {
      labels: [ '3', '4', '5', '6', '7', '8', '9', '10', 
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1'],
    datasets: 
      [{
        label:'Unique recipients',
        data:[
          0,0,0,0,0,
          1,1,1,1,1,
          1,1,1,1,1,
          1,1,1,1,1,
          1,1,1,1,1,
          1,2,3,5],
        backgroundColor: ['rgba(255, 206, 86, 0.3)'
          ],
        }
    ]}
  })
  }

  epochDate = (seconds) => {
    var time = new Date (1970, 0, 1);
    time.setSeconds(seconds);
    return time;
  }

  addToThursday = (arr) => {
    arr.forEach( transaction => {
      if ( transaction.time === 3 || transaction.time === 4 ) {
        this.setState(prevState => {
          let givsWeekData = Object.assign({}, prevState.givsWeekData);
          givsWeekData.datasets[0].data[6] += transaction.givs;
          let givsMonthData = Object.assign({}, prevState.givsMonthData);
          givsMonthData.datasets[0].data[29] += transaction.givs;
          return {givsWeekData, givsMonthData};
        })
      }
    })    
  }

  getTransactions = () => {
    const options = {
      method: "post",
      headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `merchantUuid=${this.props.merchant.id}`,
      mode:"cors"
    };

    fetch(`${this.props.host}/transaction/getTxByMerchant`, options)
    .then((response) => {
    response.json()
    .then(data => {
      console.log(data)
      this.addToThursday(data.transactionList.map(datum => {
        return { time:new Date (this.epochDate(datum.createdAt.seconds)).getDay(), givs:datum.totalPrice }
      }))
    });
    })
    .catch(err => {this.setState({error: err})}
    )
    .catch(err => console.log(err));
  };

  toggle(index) {  
    this.setState({
      current:index
    })
  }

  render() {
    return (
    <div>
      {/* <div id='analytics-labels'>
        
        
      </div> */}
      <br/>
      <Container>
        <Row>
          <Col> 
          <span className="time-setting"> 
            <button onClick={this.toggle.bind(this, 1)}> Week </button> 
          </span>
          </Col>
          
          <Col> 
          <span className="time-setting"> 
            <button onClick={this.toggle.bind(this, 2)}> Month </button> 
          </span>
          </Col>
          <Col> 
          </Col>
        </Row>
        </Container>
        <br/> <br/>
      <Container>
        <Row>
          <Col> Total GIVs 
          </Col>
          <Col> 
          </Col>
        </Row>
        </Container>
      {/* <div id='givs-heading'>
        <span> Givs </span>
      </div> */}
      <div id="givs-charts">
        { this.state.current === 1 ? <GivsWeek givsWeekData={this.state.givsWeekData} /> : <GivsMonth givsMonthData={this.state.givsMonthData} /> }
        <span id='total-givs'>
          { this.state.current === 1 
          ? `${this.state.givsWeekData.datasets[0].data.reduce((a,b) => a + b, 0)} GIVs`
          : `${this.state.givsMonthData.datasets[0].data.reduce((a,b) => a + b, 0)} GIVs` }
        </span>
        {/* <img id='cartimg' src={cart} alt="cart"/> */}
        
      </div>

      <br/><br/>
      <Container>
        <Row>
          <Col> Most Popular Items
          </Col>
          <Col> &nbsp;&nbsp;&nbsp;&nbsp; # of Unique Recipients
          </Col>
        </Row>
      </Container>
      {/* <div id='analytics-labels'>
        <div id='givs-heading'>
          
          <span> Most Popular Items </span>
          <span> Most Popular Items </span>
        </div>
      </div> */}

      <div id="item-charts">
        { this.state.current === 1 ? <ItemsWeek itemWData={this.state.itemWData} /> : <ItemsMonth itemMData={this.state.itemMData} /> }
        { this.state.current === 1 ? <RecipientsWeek recipientWData={this.state.recipientWData} /> : <RecipientsMonth recipientMData={this.state.recipientMData} /> }
      </div>
    </div>
    );
  };

}
export default AnalyticsPage;