import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class AccountRecordLWC extends LightningElement {
  account;

  @wire(getRecord, { recordId: '0012t00000U9SACAA3', fields: [ACCOUNT_NAME_FIELD, ACCOUNT_INDUSTRY_FIELD, ACCOUNT_PHONE_FIELD] })
  wiredAccount({ error, data }) {
    if (data) {
      this.account = {
        Name: getFieldValue(data, ACCOUNT_NAME_FIELD),
        Industry: getFieldValue(data, ACCOUNT_INDUSTRY_FIELD),
        Phone: getFieldValue(data, ACCOUNT_PHONE_FIELD)
      };
    } else if (error) {
      console.error('Error fetching account record', error);
    }
  }
}