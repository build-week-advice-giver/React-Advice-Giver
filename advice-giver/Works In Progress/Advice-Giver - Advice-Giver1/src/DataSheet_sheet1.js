import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_sheet1 extends DataSheetBase {

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
    item['main'] = "index.js";
    item['devDependencies'] = {"jest":"^24.8.0","supertest":"^4.0.2"};
    item['name'] = "users\n";
    item['version'] = "1.0.0";
    item['column8'] = "";
    item['dependencies'] = {"dotenv":"^8.0.0","helmet":"^3.18.0","knex":"^0.17.6","pg":"^7.11.0","sqlite3":"^4.0.9","nodemon":"^1.19.1","cors":"^2.8.5","express":"^4.17.1","bcryptjs":"^2.4.3","jsonwebtoken":"^8.5.1"};
    item['scripts'] = {"start":"node index.js","server":"nodemon index.js","test":"jest --watch --verbose"};
    item['license'] = "MIT";
    item.key = key++;
  }

}
