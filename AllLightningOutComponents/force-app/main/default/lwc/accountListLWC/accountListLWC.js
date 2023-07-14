import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';

export default class AccountListLWC extends LightningElement {
  accounts;

  @wire(getAllAccounts)
  wiredAccounts({ error, data }) {
    if (data) {
      this.accounts = data;
    } else if (error) {
      console.error('Error fetching accounts', error);
    }
  }
}