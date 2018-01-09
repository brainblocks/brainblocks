/* @flow */

import { Button } from '../../src';

describe('button cases', () => {

    it('should render the button', () => {

        Button.render({

            env: 'test',

            account: 'abc123',

            onClick() {
                // pass
            },

            onComplete() {
                // pass
            }

        }, document.body);
    });
});
