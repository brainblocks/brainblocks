var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* @jsx jsxDom */

import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'xcomponent/src';

import { buttonTemplate } from './template';
import { containerTemplate } from './container';

import { SUPPORTED_CURRENCIES } from '../config';

export var Button = create({

    tag: 'brainblocks-button',

    defaultEnv: 'production',

    url: {
        test: '/base/test/windows/button/index.htm',
        local: 'http://localhost:8000/button',
        production: 'https://brainblocks.io/button'
    },

    dimensions: {
        width: '300px',
        height: '50px'
    },

    domain: {
        test: 'mock://www.my-site.com',
        local: 'http://localhost:8000',
        production: 'https://brainblocks.io'
    },

    props: {

        logLevel: {
            type: 'string',
            value: 'warn',
            required: false
        },

        style: {
            type: 'object',
            required: false,
            def: function def() {
                return {};
            }
        },

        renderPayPal: {
            type: 'function',
            required: false,
            get value() {
                return function (_ref) {
                    var client = _ref.client,
                        style = _ref.style,
                        commit = _ref.commit,
                        _payment = _ref.payment,
                        _onAuthorize = _ref.onAuthorize;

                    return new ZalgoPromise(function (resolve, reject) {
                        if (window.paypal && window.paypal.Button) {
                            return resolve();
                        }
                        var script = document.createElement('script');
                        script.src = 'https://www.paypalobjects.com/api/checkout.min.js';
                        script.onload = resolve;
                        script.onerror = reject;
                        if (!document.body) {
                            throw new Error('No document.body found');
                        }
                        document.body.appendChild(script);
                    }).then(function () {
                        return window.paypal.Button.render({
                            client: client,
                            style: style,
                            commit: commit,
                            payment: function payment(data, actions) {
                                return _payment(data, {
                                    payment: actions.payment,
                                    order: actions.order
                                });
                            },
                            onAuthorize: function onAuthorize(data, actions) {
                                return _onAuthorize(data, {
                                    payment: actions.payment,
                                    order: actions.order
                                });
                            }
                        }, '#paypal-button');
                    }).then(function () {});
                };
            }
        },

        payment: {
            type: 'object',
            required: true,
            validate: function validate(payment) {
                if (!payment.destination) {
                    throw new Error('Expected payment.destination');
                }
                if (!payment.destination.match(/((?:xrb_[13][a-km-zA-HJ-NP-Z0-9]{59})|(?:nano_[13][a-km-zA-HJ-NP-Z0-9]{59}))/)) {
                    throw new Error('Invalid nano address: ' + payment.destination);
                }
                if (!payment.currency) {
                    throw new Error('Expected payment.currency');
                }
                if (payment.currency !== 'rai' && SUPPORTED_CURRENCIES.indexOf(payment.currency) === -1) {
                    throw new Error('Expected payment.currency to be rai or ' + SUPPORTED_CURRENCIES.join(', ') + ', got ' + payment.currency);
                }
                if (!payment.amount) {
                    throw new Error('Expected payment.amount');
                }
                if (!payment.amount.toString().match(/^\d+(\.\d+)?$/)) {
                    throw new Error('Expected payment.mount to be a number, got ' + payment.amount);
                }
                if (payment.paypal_email && (payment.currency === 'rai' || payment.currency === 'nano')) {
                    throw new Error('Can only use PayPal with non-nano currency');
                }
            },
            decorate: function decorate(payment) {
                return _extends({}, payment, {
                    amount: payment.amount.toString()
                });
            }
        },

        onToken: {
            type: 'function',
            required: false
        },

        onPayment: {
            type: 'function',
            required: true
        },

        onClick: {
            type: 'function',
            required: false
        }
    },

    defaultContext: __DEFAULT_CONTEXT__,

    contexts: {
        iframe: true,
        popup: __POPUP_SUPPORT__
    },

    prerenderTemplate: function prerenderTemplate(_ref2) {
        var jsxDom = _ref2.jsxDom,
            props = _ref2.props;

        return jsxDom(
            'html',
            null,
            jsxDom(
                'head',
                null,
                jsxDom(
                    'style',
                    null,
                    '\n                            html, body {\n                                border: 0;\n                                padding: 0;\n                                margin: 0;\n                            }\n                        '
                )
            ),
            jsxDom(
                'body',
                null,
                buttonTemplate({ props: props })
            )
        );
    },


    containerTemplate: containerTemplate
});