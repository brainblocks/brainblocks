
/* @jsx jsxDom */

import { create } from 'xcomponent/src';

import { buttonTemplate } from './template';

export var Button = create({

    tag: 'brainblocks-button',

    defaultEnv: 'production',

    url: {
        test: '/base/test/windows/button/index.htm',
        production: 'https://brainblocks.io/button'
    },

    domain: {
        test: 'mock://www.my-site.com',
        production: 'https://brainblocks.io'
    },

    props: {

        account: {
            type: 'string',
            requited: true
        },

        onClick: {
            type: 'function',
            required: true
        },

        onComplete: {
            type: 'function',
            required: true
        }
    },

    defaultContext: __DEFAULT_CONTEXT__,

    contexts: {
        iframe: true,
        popup: __POPUP_SUPPORT__
    },

    prerenderTemplate: function prerenderTemplate(_ref) {
        var jsxDom = _ref.jsxDom;

        return buttonTemplate({ jsxDom: jsxDom });
    }
});