import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_492036";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp2_text_612901";
    item['en'] = "Password:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_610561";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_815892";
    item['en'] = "Username:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_1021754";
    item['en'] = "LOGIN";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_317370";
    item['en'] = "Username:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_635784";
    item['en'] = "Password:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_checkbox_706120";
    item['en'] = "Give Advice";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_checkbox2_1021456";
    item['en'] = "Ask for Advice";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_164152";
    item['en'] = "LOGIN";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text_838374";
    item['en'] = "Username:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_text2_94060";
    item['en'] = "Password:";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_747771";
    item['en'] = "LOGIN";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_text_163536";
    item['en'] = "Q. Eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_965459";
    item['en'] = "Users";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
