/* @flow */
/* @jsx jsxDom */

import { create } from 'xcomponent/src';

import { buttonTemplate } from './template';
import { containerTemplate } from './container';

export let Button = create({

    tag: 'brainblocks-button',

    defaultEnv: 'production',

    url: {
        test:       '/base/test/windows/button/index.htm',
        local:      'http://localhost:8000/button',
        production: 'https://brainblocks.io/button'
    },

    domain: {
        test:       'mock://www.my-site.com',
        local:      'http://localhost:8000',
        production: 'https://brainblocks.io'
    },

    dimensions: {
        width: '300px',
        height: '50px'
    },

    props: {

        payment: {
            type:     'object',
            required: true,
            validate(payment) {
                if (!payment.destination) {
                    throw new Error(`Expected payment.destination`);
                }
                if (!payment.destination.match(/^xrb_[a-z0-9]{60}$/)) {
                    throw new Error(`Invalid raiblocks address: ${ payment.destination }`);
                }

                if (!payment.currency) {
                    throw new Error(`Expected payment.currency`);
                }
                if (payment.currency !== 'rai' /* && payment.currency !== 'usd' */) {
                    throw new Error(`Expected payment.currency to be 'rai', got ${ payment.currency }`);
                }

                if (!payment.amount) {
                    throw new Error(`Expected payment.amount`);
                }
                if (typeof payment.amount !== 'number') {
                    throw new Error(`Expected payment.amount to be a number, got ${ payment.amount }`);
                }
                if (payment.amount <= 0) {
                    throw new Error(`Expected payment.amount to be at least 1, got ${ payment.amount }`);
                }
                //if (payment.currency === 'usd' && payment.amount > 10000) {
                //    throw new Error(`Expected payment.amount to be less then $100.00 USD, got ${ payment.amount }`);
                //}
                if (payment.currency === 'rai' && payment.amount > 5000000) {
                    throw new Error(`Expected payment.amount to be less then 5000000 RAI, got ${ payment.amount }`);
                }
            }
        },

        onPayment: {
            type:     'function',
            required: true
        }
    },

    defaultContext: __DEFAULT_CONTEXT__,

    contexts: {
        iframe: true,
        popup:  __POPUP_SUPPORT__
    },

    prerenderTemplate({ jsxDom, props }) : HTMLElement {
        return (
            <html>
                <head>
                    <style>
                        {`
                            html, body {
                                border: 0;
                                padding: 0;
                                margin: 0;
                            }
                        `}
                    </style>
                </head>
                <body>
                    { buttonTemplate({ props }) }
                </body>
            </html>
        );
    },

    containerTemplate
});
