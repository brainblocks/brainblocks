/* @flow */

import { Button } from '../../src';

describe('button cases', () => {

    it('should render the button', (done) => {

        Button.render({

            env: 'test',

            payment: {
                destination: 'nano_1brainb3zz81wmhxndsbrjb94hx3fhr1fyydmg6iresyk76f3k7y7jiazoji',
                currency:    'rai',
                amount:      '1000'
            },

            onClick() {
                // pass
            },

            onPayment() {
                done();
            }

        }, document.body);
    });
});
