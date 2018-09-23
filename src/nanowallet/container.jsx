/* @flow */
/* @jsx jsxDom */

export function containerTemplate({ id, tag, context, CLASS, outlet, actions, jsxDom } : Object) : HTMLElement {

    let focus = (event) => {
        event.preventDefault();
        event.stopPropagation();
        return actions.focus();
    }

    return (
        <div id={ id } onClick={ focus } class={ `${ CLASS.XCOMPONENT } ${ CLASS.XCOMPONENT }-tag-${ tag } ${ CLASS.XCOMPONENT }-context-${ context } ${ CLASS.XCOMPONENT }-focus` }>

            { outlet }

            <style>
                {`
                    #${ id } {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        z-index: 10000;
                    }
                    #${ id } {
                        cursor: pointer;
                    }
                    #${ id } .${ CLASS.XCOMPONENT }-close:hover {
                        opacity: 1;
                    }
                    #${ id } .${ CLASS.XCOMPONENT }-close:before,
                    #${ id } .${ CLASS.XCOMPONENT }-close:after {
                        position: absolute;
                        left: 8px;
                        content: ' ';
                        height: 16px;
                        width: 2px;
                        background-color: white;
                    }
                    #${ id } .${ CLASS.XCOMPONENT }-close:before {
                        transform: rotate(45deg);
                    }
                    #${ id } .${ CLASS.XCOMPONENT }-close:after {
                        transform: rotate(-45deg);
                    }
                `}
            </style>
        </div>
    );
}
