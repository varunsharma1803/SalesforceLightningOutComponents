import {LightningElement, track} from 'lwc';
import updateObjects from '@salesforce/apex/optOutFormController.updateSObjects';

export default class optoutForm extends LightningElement {

    @track firstName;
    @track lastName;
    @track company;
    @track email;
    @track description;
    @track reason;
    @track isChecked;
    @track showNotification = false;

    @track error;
    @track message;

    get options() {
        return [
            {
                label: 'Request subject access request form to exercise your individual rights',
                value: 'Request subject access request form to exercise your individual rights'
            },
            {
                label: 'Right to opt-out of receiving marketing communications',
                value: 'Right to opt-out of receiving marketing communications'
            },
        ];
    }

    handleFirst(event) {
        this.firstName = event.target.value;
    }

    handleLast(event) {
        this.lastName = event.target.value;
    }

    handleCompany(event) {
        this.company = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
    }

    handleDesc(event) {
        this.description = event.target.value;
    }

    handleReason(event) {
        this.reason = event.target.value;
    }

    handleCheckbox(event) {
        this.value = event.detail.checked;
        this.isChecked = this.value;
    }

    submitForm() {

        this.template.querySelector('lightning-button').variant = 'neutral';

        let parameterObject = {
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            email: this.email,
            description: this.description,
            reason: this.reason,
            consent: this.isChecked
        };

        updateObjects({wrapper: parameterObject})
            .catch((error) => {
                this.message = undefined;
                this.error = error;
            });

        this.showNotification = true;

    }
}