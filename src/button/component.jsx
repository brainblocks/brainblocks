/* @flow */
/* @jsx jsxDom */

import { create } from 'xcomponent/src';

import { buttonTemplate } from './template';
import { containerTemplate } from './container';

import { SUPPORTED_CURRENCIES } from '../config';

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

        logLevel: {
            type: 'string',
            value: 'warn',
            required: false
        },

        style: {
            type:     'object',
            required: false,
            def() {
                return {};
            }
        },

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
                if (payment.currency !== 'rai' && SUPPORTED_CURRENCIES.indexOf(payment.currency) === -1) {
                    throw new Error(`Expected payment.currency to be rai or ${ SUPPORTED_CURRENCIES.join(', ') }, got ${ payment.currency }`);
                }

                if (!payment.amount) {
                    throw new Error(`Expected payment.amount`);
                }
                if (!payment.amount.toString().match(/^\d+(\.\d+)?$/)) {
                    throw new Error(`Expected payment.mount to be a number, got ${ payment.amount }`);
                }
            },
            decorate(payment) {
                return {
                    ...payment,
                    amount: payment.amount.toString()
                };
            }
        },

        onPayment: {
            type:     'function',
            required: true
        },

        onClick: {
            type:     'function',
            required: false
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
