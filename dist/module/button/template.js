
/* @jsx jsxDom */

import { jsxDom } from 'xcomponent/src/lib';

export function buttonTemplate(_ref) {
    var props = _ref.props;


    var currency = '';
    var amount = '';

    if (props.payment.currency === 'rai') {
        var hasRai = function hasRai(num) {
            num = parseInt(num) / 1000;
            return num > Math.floor(num);
        };

        currency = '';

        amount = hasRai(props.payment.amount) ? (parseInt(props.payment.amount) / 1000000).toFixed(6) : (parseInt(props.payment.amount) / 1000000).toFixed(3);
    }
    return jsxDom(
        'div',
        { 'class': 'brainblocks-button-container' },
        jsxDom(
            'style',
            null,
            '\n                    .brainblocks-button {\n                        display: inline-block;\n                        width: 100%;\n                        height: 50px;\n                        background-color: #eee;\n                        border-radius: 5px;\n                        font-family: Helvetica, Arial, sans-serif;\n                        line-height: 50px;\n                        color: #1A3238;\n                        cursor: pointer;\n                        font-size: 16px;\n                        text-align: center;\n                        letter-spacing: 1px;\n                    }\n                    \n                    .brainblocks-button-content {\n                        width: 100%;\n                        height: 50px;\n\n                        display: flex;\n                        flex-direction: row;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    .brainblocks-button .brainblocks-raiblocks-logo {\n                        height: 15px;\n                        margin-left: 10px;\n                        border-left: 1px solid #ccc;\n                        padding-left: 10px;\n                    }\n\n                    .brainblocks-button .brainblocks-raiblocks-logo-small {\n                        height: 15px;\n                        margin-left: 5px;\n                        border-left: 1px solid #ccc;\n                        padding-left: 5px;\n                        display: none;\n                    }\n\n                    @media screen and (max-width: 299px) {\n                        .brainblocks-button .pay-text {\n                            display: none;\n                        }\n                    }\n\n                    @media screen and (max-width: 200px) {\n                        .brainblocks-button .brainblocks-raiblocks-logo {\n                            display: none;\n                        }\n\n                        .brainblocks-button .brainblocks-raiblocks-logo-small {\n                            display: inline-block;\n                        }\n                    }\n                '
        ),
        jsxDom(
            'div',
            { role: 'button', 'class': 'brainblocks-button' },
            jsxDom(
                'div',
                { 'class': 'brainblocks-button-content' },
                jsxDom(
                    'span',
                    null,
                    jsxDom(
                        'span',
                        { 'class': 'pay-text' },
                        amount && 'Pay '
                    ),
                    jsxDom(
                        'span',
                        null,
                        jsxDom(
                            'span',
                            { id: 'pay-amount', 'class': 'pay-amount' },
                            amount || jsxDom('img', { 'class': 'loading-spinner', src: 'data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzguNzUgMTYuMThWMS41NmE2NC4xIDY0LjEgMCAwIDEgNDcuNyA0Ny43SDExMS44YTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3LTMzLjA4ek0xNi40MyA0OS4yNUgxLjhhNjQuMSA2NC4xIDAgMCAxIDQ3LjctNDcuN1YxNi4yYTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3IDMzLjA3em0zMy4wNyA2Mi4zMnYxNC42MkE2NC4xIDY0LjEgMCAwIDEgMS44IDc4LjVoMTQuNjNhNDkuOTggNDkuOTggMCAwIDAgMzMuMDcgMzMuMDd6bTYyLjMyLTMzLjA3aDE0LjYyYTY0LjEgNjQuMSAwIDAgMS00Ny43IDQ3Ljd2LTE0LjYzYTQ5Ljk4IDQ5Ljk4IDAgMCAwIDMzLjA4LTMzLjA3eiIgZmlsbD0iIzgxY2RmMSIgZmlsbC1vcGFjaXR5PSIxIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209Ii05MCA2NCA2NCIgdG89IjAgNjQgNjQiIGR1cj0iNDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg==' })
                        ),
                        jsxDom(
                            'span',
                            null,
                            ' '
                        ),
                        jsxDom(
                            'span',
                            { id: 'pay-currency', 'class': 'pay-currency' },
                            currency
                        )
                    )
                ),
                jsxDom('img', { 'class': 'brainblocks-raiblocks-logo', src: 'data:image/svg+xml;base64,DQo8c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTYgMjkuNCI+PHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+PGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNC44IiBjeT0iMjQuNCIgcj0iNC44Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTYyIC42Yy0yLjYgMC00LjggMi4xLTQuOCA0LjggMCAzLjgtLjYgNC44LTQuOCA0LjhINTJjLTIuNC4yLTQuMyAyLjItNC4zIDQuN3YuMWMwIDMuNy0uNyA0LjYtNC44IDQuNi0uMiAwLS40IDAtLjUuMS0yLjQuMy00LjMgMi4zLTQuMyA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44IDIuNSAwIDQuNi0yIDQuNy00LjR2LS40YzAtMy40IDEuMS00LjcgNC43LTQuOGguMWMyLjUgMCA0LjYtMiA0LjctNC41di0uM2MwLTMuNSAxLjEtNC44IDQuOC00LjggMi42IDAgNC44LTIuMSA0LjgtNC44IDAtMi41LTIuMS00LjYtNC43LTQuNnpNMzMuOCAxMC4yaC0uNGMtNC4yIDAtNC44LTEtNC44LTQuOCAwLTIuNi0yLjEtNC44LTQuOC00LjhDMjEuMi42IDE5IDIuNyAxOSA1LjRjMCAzLjgtLjYgNC43LTQuOCA0LjdoLS40Yy0yLjQuMi00LjMgMi4yLTQuMyA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44IDIuNSAwIDQuNi0yIDQuNy00LjR2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAzLjcgMCA0LjggMS4zIDQuOCA0LjcgMCAyLjYgMi4xIDQuOCA0LjggNC44czQuOC0yLjEgNC44LTQuOGMtLjEtMi40LTItNC40LTQuNC00LjZ6Ii8+PGc+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEwOS4zLjhjLS4zIDAtLjYuMS0uOC40LS4yLjItLjMuNS0uMy45VjI1TDkwLjcgMS40Yy0uMy0uNC0uNi0uNi0xLS42cy0uNy4xLS45LjRjLS4yLjItLjMuNS0uMy45djI2YzAgLjQuMS43LjMuOS4yLjIuNS4zLjkuMy4zIDAgLjYtLjEuOC0uNC4yLS4yLjMtLjUuMy0uOVY1LjJsMTcuNSAyMy42Yy4zLjQuNy42IDEuMS42LjQgMCAuNy0uMS45LS40LjItLjIuMy0uNS4zLS45di0yNmMwLS40LS4xLS43LS4zLS45LS4zLS4zLS42LS40LTEtLjR6bTkyLS44Yy04LjEgMC0xNC43IDYuNi0xNC43IDE0LjdzNi42IDE0LjcgMTQuNyAxNC43UzIxNiAyMi44IDIxNiAxNC43IDIwOS40IDAgMjAxLjMgMHptMCAyN2MtNi44IDAtMTIuMy01LjUtMTIuMy0xMi4zczUuNS0xMi4zIDEyLjMtMTIuMyAxMi4zIDUuNSAxMi4zIDEyLjNTMjA4LjEgMjcgMjAxLjMgMjd6TTE3NyAuOGMtLjMgMC0uNi4xLS44LjQtLjIuMi0uMy41LS4zLjlWMjVMMTU4LjQgMS40Yy0uMy0uNC0uNi0uNi0xLS42cy0uNy4xLS45LjRjLS4yLjItLjMuNS0uMy45djI2YzAgLjQuMS43LjMuOS4yLjIuNS4zLjkuMy4zIDAgLjYtLjEuOC0uNC4yLS4yLjMtLjUuMy0uOVY1LjJMMTc2IDI4LjhjLjMuNC43LjYgMS4xLjYuNCAwIC43LS4xLjktLjQuMi0uMi4zLS41LjMtLjl2LTI2YzAtLjQtLjEtLjctLjMtLjktLjMtLjMtLjYtLjQtMS0uNHptLTQyLjMuOGMtLjEtLjMtLjMtLjUtLjUtLjYtLjMtLjItLjUtLjItLjgtLjItLjYgMC0xLjEuMy0xLjMuOWwtMTEuNyAyNi4yYy0uMS4xLS4xLjMtLjEuNCAwIC4zLjEuNi4zLjguMi4yLjUuMy44LjMuNSAwIC45LS4zIDEuMS0uOGwzLjEtN2gxNS41bDMgN2MuMS4yLjMuNC41LjYuMi4xLjQuMi42LjIuMyAwIC42LS4xLjgtLjMuMi0uMi40LS40LjQtLjcgMC0uMiAwLS4zLS4xLS41TDEzNC43IDEuNnptLTguMiAxNy45TDEzMy4zIDRsNi44IDE1LjVoLTEzLjZ6Ii8+PC9nPjwvc3ZnPg==' }),
                jsxDom('img', { 'class': 'brainblocks-raiblocks-logo-small', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA2NyAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+DQogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQuOCIgY3k9IjI0LjQiIHI9IjQuOCIvPg0KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjIgLjZjLTIuNiAwLTQuOCAyLjEtNC44IDQuOCAwIDMuOC0uNiA0LjgtNC44IDQuOEg1MmMtMi40LjItNC4zIDIuMi00LjMgNC43di4xYzAgMy43LS43IDQuNi00LjggNC42LS4yIDAtLjQgMC0uNS4xLTIuNC4zLTQuMyAyLjMtNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjRjMC0zLjQgMS4xLTQuNyA0LjctNC44aC4xYzIuNSAwIDQuNi0yIDQuNy00LjV2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAyLjYgMCA0LjgtMi4xIDQuOC00LjggMC0yLjUtMi4xLTQuNi00LjctNC42ek0zMy44IDEwLjJoLS40Yy00LjIgMC00LjgtMS00LjgtNC44IDAtMi42LTIuMS00LjgtNC44LTQuOEMyMS4yLjYgMTkgMi43IDE5IDUuNGMwIDMuOC0uNiA0LjctNC44IDQuN2gtLjRjLTIuNC4yLTQuMyAyLjItNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjNjMC0zLjUgMS4xLTQuOCA0LjgtNC44IDMuNyAwIDQuOCAxLjMgNC44IDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjhzNC44LTIuMSA0LjgtNC44Yy0uMS0yLjQtMi00LjQtNC40LTQuNnoiLz4NCjwvc3ZnPg==' })
            )
        )
    );
}