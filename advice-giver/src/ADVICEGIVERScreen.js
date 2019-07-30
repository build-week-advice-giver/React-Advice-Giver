import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class ADVICEGIVERScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
      checkbox: 'false',
      checkbox2: 'false',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  checkboxChanged_checkbox = (event) => {
    this.setState({checkbox: (event.target.checked ? 'true' : 'false')});
  }
  
  checkboxChanged_checkbox2 = (event) => {
    this.setState({checkbox2: (event.target.checked ? 'true' : 'false')});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elField2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField2_outer = {
        pointerEvents: 'auto',
     };
    let checked_checkbox = this.state.checkbox;
    
    const style_elCheckbox_outer = {
        pointerEvents: 'auto',
     };
    let checked_checkbox2 = this.state.checkbox2;
    
    const style_elCheckbox2_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    
    return (
      <div className="AppScreen ADVICEGIVERScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elField' style={style_elField_outer}>
            <input className='baseFont' style={style_elField} type="text" placeholder={this.props.locStrings.login_field_77277} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='elText2'>
            <div className='baseFont' style={style_elText2}>
              <div>{this.props.locStrings.login_text2_635784}</div>
            </div>
          
          </div>
          
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{this.props.locStrings.login_text_317370}</div>
            </div>
          
          </div>
          
          <div className='elField2' style={style_elField2_outer}>
            <input className='baseFont' style={style_elField2} type="text" placeholder={this.props.locStrings.login_field2_878532} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          
          </div>
          
          <div className='elCheckbox' style={style_elCheckbox_outer}>
            <Checkbox className='baseFont'  label={this.props.locStrings.login_checkbox_706120} onChange={this.checkboxChanged_checkbox} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  />
          
          </div>
          
          <div className='elCheckbox2' style={style_elCheckbox2_outer}>
            <Checkbox className='baseFont'  label={this.props.locStrings.login_checkbox2_1021456} onChange={this.checkboxChanged_checkbox2} checked={checked_checkbox2 === 'true' || checked_checkbox2 === true || ''+checked_checkbox2 === '1'}  />
          
          </div>
          
          <div className='elButton'>
            <Button className='actionFont' style={style_elButton}  color="accent" >
              {this.props.locStrings.login_button_164152}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">ADVICE GIVER</div></Appbar>
        
      </div>
    )
  }
  

}
