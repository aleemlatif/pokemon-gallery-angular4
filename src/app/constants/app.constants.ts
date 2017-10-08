import { InjectionToken } from '@angular/core';
import { IAppConstants } from './app.constants.interface';

export let APP_CONSTANTS_TOKEN = new InjectionToken('app.constants');

export const APP_CONSTANTS: IAppConstants = {
    appLabels: {
        buttons: {
            cancel: { label: 'Cancel', class: 'btn-secondary' },
            done: { label: 'Done', class: 'btn-primary' },
            ok: { label: 'Ok', class: 'btn-primary' },
            feedback: { label: 'Send Feedback', class: 'btn-primary' }
        },
        contactUs: {
            label: 'Contact Us'
        },
        logout: 'Log Out',
        menu: 'Menu',
        opensInNewWindow: '<span class="sr-only">opens in new window</span></a>',
        opensInNewApp: '<span class="sr-only">opens in new application</span></a>',
        feedback: {
            label: 'Feedback',
            form: {
                name: {
                    label: 'Your Name',
                    id: 'name'
                },
                email: {
                    label: 'Your Email Address',
                    id: 'emailAdd'
                },
                enquiry: {
                    label: 'Your Enquiry or Feedback',
                    id: 'enquiry'
                }
            }
        }
    },

    errorTexts: {
        required: 'This is a required field.',
        atLeastOnePhone: 'Atleast one phone number is required.',
        invalid: 'Invalid entry.',
        minLength: 'Your input is too short.',
        maxLength: 'Your input is too long.',
        invalidMobile: 'Mobile number needs to be 10 digits long.',
        invalidPhone: 'needs to be 10 digits long.',
        email: 'Invalid email address.',
        digits: 'This is a digits only field.',
        alphabets: 'This is an alphabets only field.',
        alphanumeric: 'This is an alphanumeric only field.',
        startsWithNumber: 'This cannot start with a number.',
        startDate: 'The start date cannot be in the past.',
        endDate: 'The end date cannot be before the start date.',
        unsavedChanges: 'You have unsaved changes on this page.  Are you sure you want to cancel this action?',
        format: {
            date: 'The date you have entered is not valid. Please re-enter.'
        },
        placeholders: 'Please replace the placeholder text or delete all the text in the field.',
        invalidAddress: 'Please enter a valid address'
    }

};
