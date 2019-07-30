import React, { Component } from 'react';
import './App.css';
import Comp2 from './Comp2';


export default class ListItem1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    
    return (
      <div className="ListItem1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='hasNestedComps elComp'>
            <div className=''>
              <Comp2 ref={(el)=> this._elComp = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
