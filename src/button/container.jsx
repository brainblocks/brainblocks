/* @flow */
/* @jsx jsxDom */

export function containerTemplate({ id, tag, context, CLASS, outlet, jsxDom, dimensions : { width, height }, props } : Object) : HTMLElement {

    return (
        <div id={ id } class={ `${ CLASS.XCOMPONENT } ${ CLASS.XCOMPONENT }-tag-${ tag } ${ CLASS.XCOMPONENT }-context-${ context }` }>
            <style>
                {`
                    #${ id }, #${ id } > .${ CLASS.OUTLET } {
                        transition: height 0.5s ease-in-out;
                    }

                    #${ id } > .${ CLASS.OUTLET } {
                        display: inline-block;
                        max-width: 500px;
                        min-width: 150px;
                        width: ${ props.style.size === 'responsive' ? '100%' : width };
                        height: ${ height };
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

                    #${ id } #paypal-button {
                        margin-top: 10px;
                        border-top: 1px solid #eeee;
                        padding-top: 15px;
                    }
                `}
            </style>

            { outlet }

            {
                props.payment.paypal_email &&
                    <div id="paypal-button"></div>
            }
        </div>
    );
}
