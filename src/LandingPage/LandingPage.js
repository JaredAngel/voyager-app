import React, { Component } from 'react';
import App from '../App/App';
import './LandingPage.css';

export default class LandingPage extends Component{
  state = {
    showApp : false
  }

  beginVoyage = () => {
    this.setState({showApp: true})
  }

  render(){
    return (
      <>
        {!this.state.showApp && 
          <div className='LandingPage'>
            <h2>Welcome to Voyager!</h2>
            <p>Voyager acts as a centralized travel journal for places that you have been, plan to go, and love sharing with your family and friends. Create high-level travel trips and outfit them with every activity you can think of. From every Voyage down to each of their Activities you'll have the option to categorize, organize, and digitize.</p>
            <button className='Begin__Voyaging' onClick={this.beginVoyage}>Begin Voyaging</button>
          </div>
        }

        {this.state.showApp && <App />}
      </>
    );
  }
}