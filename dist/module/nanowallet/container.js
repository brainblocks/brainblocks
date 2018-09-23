
/* @jsx jsxDom */

export function containerTemplate(_ref) {
    var id = _ref.id,
        tag = _ref.tag,
        context = _ref.context,
        CLASS = _ref.CLASS,
        outlet = _ref.outlet,
        actions = _ref.actions,
        jsxDom = _ref.jsxDom;


    var focus = function focus(event) {
        event.preventDefault();
        event.stopPropagation();
        return actions.focus();
    };

    return jsxDom(
        "div",
        { id: id, onClick: focus, "class": CLASS.XCOMPONENT + " " + CLASS.XCOMPONENT + "-tag-" + tag + " " + CLASS.XCOMPONENT + "-context-" + context + " " + CLASS.XCOMPONENT + "-focus" },
        outlet,
        jsxDom(
            "style",
            null,
            "\n                    #" + id + " {\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: rgba(0, 0, 0, 0.8);\n                        z-index: 10000;\n                    }\n                    #" + id + " {\n                        cursor: pointer;\n                    }\n                    #" + id + " ." + CLASS.XCOMPONENT + "-close:hover {\n                        opacity: 1;\n                    }\n                    #" + id + " ." + CLASS.XCOMPONENT + "-close:before,\n                    #" + id + " ." + CLASS.XCOMPONENT + "-close:after {\n                        position: absolute;\n                        left: 8px;\n                        content: ' ';\n                        height: 16px;\n                        width: 2px;\n                        background-color: white;\n                    }\n                    #" + id + " ." + CLASS.XCOMPONENT + "-close:before {\n                        transform: rotate(45deg);\n                    }\n                    #" + id + " ." + CLASS.XCOMPONENT + "-close:after {\n                        transform: rotate(-45deg);\n                    }\n                "
        )
    );
}