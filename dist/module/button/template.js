
/* @jsx jsxDom */

export function buttonTemplate(_ref) {
    var jsxDom = _ref.jsxDom;

    return jsxDom(
        "html",
        null,
        jsxDom(
            "head",
            null,
            jsxDom(
                "style",
                null,
                "\n                        .brainblocks-button {\n                            display: inline-block;\n                            width: 300px;\n                            height: 50px;\n                            background-color: #eee;\n                            border-radius: 5px;\n                            font-family: Helvetica, Arial, sans-serif;\n                            line-height: 50px;\n                            color: #1A3238;\n                            cursor: pointer;\n                            font-size: 16px;\n                        }\n\n                        .brainblocks-button * {\n                            vertical-align: middle;\n                        }\n\n                        .brainblocks-button .brainblocks-raiblocks-logo {\n                            height: 30px;\n                            margin-left: 5px;\n                        }\n                    "
            )
        ),
        jsxDom(
            "body",
            null,
            jsxDom(
                "div",
                { "class": "brainblocks-button-container" },
                jsxDom(
                    "div",
                    { role: "button", "class": "brainblocks-button" },
                    jsxDom(
                        "span",
                        null,
                        "Pay with"
                    ),
                    " ",
                    jsxDom("img", { "class": "brainblocks-raiblocks-logo", src: "/img/raiblocks-logo.svg" })
                )
            )
        )
    );
}