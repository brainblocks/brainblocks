/* @flow */
/* @jsx jsxDom */

import { ZalgoPromise } from 'zalgo-promise/src';
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

    dimensions: {
        width:  '300px',
        height: '50px'
    },

    domain: {
        test:       'mock://www.my-site.com',
        local:      'http://localhost:8000',
        production: 'https://brainblocks.io'
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

        renderPayPal: {
            type: 'function',
            required: false,
            get value() {
                return ({ client, style, commit, payment, onAuthorize }) => {
                    return new ZalgoPromise((resolve, reject) => {
                        if (window.paypal && window.paypal.Button) {
                            return resolve();
                        }
                        let script = document.createElement('script');
                        script.src = 'https://www.paypalobjects.com/api/checkout.min.js';
                        script.onload = resolve;
                        script.onerror = reject;
                        if (!document.body) {
                            throw new Error('No document.body found');
                        }
                        document.body.appendChild(script);
                    }).then(() => {
                        return window.paypal.Button.render({
                            client,
                            style,
                            commit,
                            payment: (data, actions) => {
                                return payment(data, {
                                    payment: actions.payment,
                                    order: actions.order
                                });
                            },
                            onAuthorize: (data, actions) => {
                                return onAuthorize(data, {
                                    payment: actions.payment,
                                    order: actions.order
                                });
                            }
                        }, '#paypal-button');
                    }).then(() => {});
                };
            }
        },

        payment: {
            type:     'object',
            required: true,
            validate(payment) {
                if (!payment.destination) {
                    throw new Error(`Expected payment.destination`);
                }
                if (!payment.destination.match(/((?:xrb_[13][a-km-zA-HJ-NP-Z0-9]{59})|(?:nano_[13][a-km-zA-HJ-NP-Z0-9]{59}))/)) {
                    throw new Error(`Invalid nano address: ${ payment.destination }`);
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
                if (payment.paypal_email && (payment.currency === 'rai' || payment.currency === 'nano')) {
                    throw new Error(`Can only use PayPal with non-nano currency`);
                }
            },
            decorate(payment) {
                return {
                    ...payment,
                    amount: payment.amount.toString()
                };
            }
        },
        
        onToken: {
            type:     'function',
            required: false
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
