import React, { Component } from 'react';
import './App.css';


export default class Password extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    
    return (
      <div className="Password" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{this.props.locStrings.comp2_text_612901}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
