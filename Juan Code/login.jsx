import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'ADVICE GIVER'
    this.props.appActions.goToScreen('advicegiver', { transitionId: 'fadeIn' });
  
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
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
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
    const style_elField2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField2_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{this.props.locStrings.login_text_838374}</div>
            </div>
          
          </div>
          
          <div className='elText2'>
            <div className='baseFont' style={style_elText2}>
              <div>{this.props.locStrings.login_text2_94060}</div>
            </div>
          
          </div>
          
          <div className='elField' style={style_elField_outer}>
            <input className='baseFont' style={style_elField} type="text" placeholder={this.props.locStrings.login_field_860192} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='elField2' style={style_elField2_outer}>
            <input className='baseFont' style={style_elField2} type="text" placeholder={this.props.locStrings.login_field2_993081} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          
          </div>
          
          <div className='elButton' style={style_elButton_outer}>
            <Button className='actionFont' style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_747771}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Login</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}

