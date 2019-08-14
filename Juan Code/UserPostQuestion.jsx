import React, { Component } from 'react';
import './App.css';
import CommentItem from './CommentItem';
import PostComment from './PostComment';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_username

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
    
    const dataSheet_listData1 = this.props.dataSheets['listData1'];
    const style_elBackgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
     };
    let transformPropValue_textBlock = (input) => {
      return "Hi "+input+"!";
    }
    const style_elTextBlock = {
        fontSize: 30.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const value_textBlock = transformPropValue_textBlock(this.props.ds_username);
    
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);
    
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_elBackgroundShape} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elCommentItem'>
            <div className=''>
              <CommentItem ref={(el)=> this._elCommentItem = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elTextBlock'>
            <div className='' style={style_elTextBlock}>
              <div>{value_textBlock !== undefined ? value_textBlock : (<span className="propValueMissing">{this.props.locStrings.start_textblock_416313}</span>)}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <ul className='' style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <CommentItem dataSheetId={'listData1'} dataSheetRow={row} {...{ 'username': row['username'], 'text': row['text'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          
          </div>
          
          <div className='hasNestedComps elPostComment'>
            <div className=''>
              <PostComment {...this.props} ref={(el)=> this._elPostComment = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Start</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}

