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
    item['key'] = "start_textblock_416313";
    item['en'] = "Hi Jane Doe!";
    
    item = {};
    this.items.push(item);
    item['key'] = "commentitem_username_930210";
    item['en'] = "Jane Doe";
    
    item = {};
    this.items.push(item);
    item['key'] = "commentitem_text_267121";
    item['en'] = "Comment text";
    
    item = {};
    this.items.push(item);
    item['key'] = "postcomment_username_66705";
    item['en'] = "Your name...";
    
    item = {};
    this.items.push(item);
    item['key'] = "postcomment_text_393326";
    item['en'] = "Say something!";
    
    item = {};
    this.items.push(item);
    item['key'] = "postcomment_postbutton_371091";
    item['en'] = "Post";
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
