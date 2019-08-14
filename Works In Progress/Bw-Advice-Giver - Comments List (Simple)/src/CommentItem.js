import React, { Component } from 'react';
import './App.css';


export default class CommentItem extends Component {

  // Properties used by this component:
  // username, text

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elUsername = {
        color: 'rgba(0, 0, 0, 0.8203)',
        textAlign: 'left',
     };
    const value_username = this.props.username;
    
    const style_elLine = {
        borderTop: '1px solid rgba(0, 0, 0, 0.2512)',
     };
    const style_elText = {
        color: 'rgba(0, 0, 0, 0.8203)',
        textAlign: 'left',
     };
    const value_text = this.props.text;
    
    
    return (
      <div className="CommentItem" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elUsername'>
            <div className='headlineFont' style={style_elUsername}>
              <div>{value_username !== undefined ? value_username : (<span className="propValueMissing">{this.props.locStrings.commentitem_username_930210}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elLine'>
            <div className='' style={style_elLine} />
          
          </div>
          
          <div className='elText'>
            <div className='baseFont' style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.commentitem_text_267121}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
