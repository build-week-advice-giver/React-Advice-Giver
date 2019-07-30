import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class PostComment extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      text: '',
    };
  }

  textInputChanged_username = (event) => {
    this.setState({username: event.target.value});
    this.props.appActions.updateDataSlot("ds_username", event.target.value);
  }
  
  textInputChanged_text = (event) => {
    this.setState({text: event.target.value});
  }
  
  onClick_elPostButton = (ev) => {
    this.sendData_postButton_to_listData1();
  
  }
  
  
  sendData_postButton_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listData1');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      text: this.state.text,
      username: this.state.username,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listData1', row);
    } else {
      this.props.appActions.addToDataSheet('listData1', row);
    }
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elUsername = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: 'rgba(0, 0, 0, 0.8203)',
     };
    
    const style_elUsername_outer = {
        pointerEvents: 'auto',
     };
    const style_elText = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
        color: 'rgba(0, 0, 0, 0.8203)',
     };
    
    const style_elText_outer = {
        pointerEvents: 'auto',
     };
    const style_elPostButton = {
        display: 'block',
        textTransform: 'none',
        color: 'white',
        textAlign: 'center',
     };
    const style_elPostButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="PostComment" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elUsername' style={style_elUsername_outer}>
            <input className='baseFont' style={style_elUsername} type="text" placeholder={this.props.locStrings.postcomment_username_66705} onChange={this.textInputChanged_username} value={this.state.username}  />
          
          </div>
          
          <div className='elText' style={style_elText_outer}>
            <input className='baseFont' style={style_elText} type="text" placeholder={this.props.locStrings.postcomment_text_393326} onChange={this.textInputChanged_text} value={this.state.text}  />
          
          </div>
          
          <div className='elPostButton' style={style_elPostButton_outer}>
            <Button className='actionFont' style={style_elPostButton}  color="accent" onClick={this.onClick_elPostButton} >
              {this.props.locStrings.postcomment_postbutton_371091}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
