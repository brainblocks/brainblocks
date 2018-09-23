
/* @jsx jsxDom */

import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'xcomponent/src';

import { containerTemplate } from './container';

export var NanoWallet = create({

    tag: 'nanowallet-checkout',

    defaultEnv: 'production',

    url: {
        test: '/base/test/windows/nanowallet/index.htm',
        local: 'https://pay.nanowallet.io/bb',
        production: 'https://pay.nanowallet.io/bb'
    },

    dimensions: {
        width: '600px',
        height: '700px'
    },

    domain: {
        test: 'mock://www.my-site.com',
        local: 'https://pay.nanowallet.io/',
        production: 'https://pay.nanowallet.io/'
    },

    props: {

        token: {
            type: 'string',
            queryParam: true,
            required: true
        },

        onComplete: {
            type: 'function',
            required: true,
            decorate: function decorate(original) {
                return function decoratedOnComplete() {
                    var _this = this,
                        _arguments = arguments;

                    return this.close().then(function () {
                        return original.apply(_this, _arguments);
                    });
                };
            }
        }
    },

    defaultContext: 'popup',

    contexts: {
        iframe: false,
        popup: true
    },

    containerTemplate: containerTemplate
});