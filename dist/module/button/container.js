
/* @jsx jsxDom */

export function containerTemplate(_ref) {
    var id = _ref.id,
        tag = _ref.tag,
        context = _ref.context,
        CLASS = _ref.CLASS,
        outlet = _ref.outlet,
        jsxDom = _ref.jsxDom,
        _ref$dimensions = _ref.dimensions,
        width = _ref$dimensions.width,
        height = _ref$dimensions.height,
        props = _ref.props;


    return jsxDom(
        'div',
        { id: id, 'class': CLASS.XCOMPONENT + ' ' + CLASS.XCOMPONENT + '-tag-' + tag + ' ' + CLASS.XCOMPONENT + '-context-' + context },
        jsxDom(
            'style',
            null,
            '\n                    #' + id + ', #' + id + ' > .' + CLASS.OUTLET + ' {\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' {\n                        display: inline-block;\n                        max-width: 500px;\n                        min-width: 150px;\n                        width: ' + (props.style.size === 'responsive' ? '100%' : width) + ';\n                        height: ' + height + ';\n                        display: inline-block;\n                        position: relative;\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe.' + CLASS.VISIBLE + ' {\n                        opacity: 1;\n                    }\n\n                    #' + id + ' > .' + CLASS.OUTLET + ' > iframe.' + CLASS.INVISIBLE + ' {\n                        opacity: 0;\n                    }\n\n                    #' + id + ' #paypal-button {\n                        margin-top: 10px;\n                        border-top: 1px solid #eeee;\n                        padding-top: 15px;\n                        width: ' + (props.style.size === 'responsive' ? '100%' : width) + ';\n                    }\n                '
        ),
        outlet,
        props.payment.paypal_email ? jsxDom('div', { id: 'paypal-button' }) : jsxDom('span', null)
    );
}