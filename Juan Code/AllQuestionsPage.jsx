import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import btn_icon_back_advicegiver from './images/btn_icon_back_advicegiver.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class ADVICEGIVERScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elSwapper = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
    
    const dataSheet_sheet1 = this.props.dataSheets['sheet1'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    
    let contentElement_elSwapper;  // This element's content can vary based on screen size
    
    const style_elSwapper_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('sheet1').items);
    
    
    return (
      <div className="AppScreen ADVICEGIVERScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className='appBg' style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_ADVICEGIVERScreen_elSwapper_872343">
          <div className='hasNestedComps elSwapper' style={style_elSwapper_outer}>
            <div className='' onClick={this.onClick_elSwapper} >
              {contentElement_elSwapper}
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div className='' style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Users dataSheetId={'sheet1'} dataSheetRow={row} {...{ 'name': row['name'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">ADVICE GIVER</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_advicegiver} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}

