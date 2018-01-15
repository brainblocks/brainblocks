/* @flow */
/* @jsx jsxDom */

import { type RenderOptionsType } from 'xcomponent/src/component/parent';

export function containerTemplate({ id, tag, context, CLASS, outlet, jsxDom, dimensions : { width, height } } : RenderOptionsType) : HTMLElement {

    return (
        <div id={ id } class={ `${ CLASS.XCOMPONENT } ${ CLASS.XCOMPONENT }-tag-${ tag } ${ CLASS.XCOMPONENT }-context-${ context }` }>
            <style>
                {`
                    #${ id }, #${ id } > .${ CLASS.OUTLET } {
                        width: ${ width };
                        height: ${ height };
                        transition: height 0.5s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } {
                        display: inline-block;
                        position: relative;
                        transition: height 0.5s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        transition: opacity .2s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
                        opacity: 1;
                    }

                    #${ id } > .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
                        opacity: 0;
                    }
                `}
            </style>

            { outlet }
        </div>
    );
}
