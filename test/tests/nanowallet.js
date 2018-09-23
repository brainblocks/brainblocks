/* @flow */

import { NanoWallet } from '../../src';

describe('button cases', () => {

    it('should render the nanowallet popup', (done) => {

        NanoWallet.render({

            env: 'test',

            token: 'xyz123',

            onComplete() {
                done();
            }

        }, document.body);
    });
});
