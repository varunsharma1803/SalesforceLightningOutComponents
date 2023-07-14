import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/ViewAllAccounts.getAccounts';

export default class AccountListLWC extends LightningElement {
  accounts;

  @wire(getAccounts)
  wiredAccounts({ error, data }) {
    if (data) {
      this.accounts = data;
    } else if (error) {
      console.error(error);
    }
  }
}