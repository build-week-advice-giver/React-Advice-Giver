import React, { Component } from 'react';
import './App.css';


export default class Users extends Component {

  // Properties used by this component:
  // name

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text = this.props.name;
    
    
    return (
      <div className="Users" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component1_text_965459}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
