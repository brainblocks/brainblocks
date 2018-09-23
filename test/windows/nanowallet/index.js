/* @flow */

import '../../../src'; // eslint-disable-line import/no-unassigned-import

if (!window.xprops.token) {
    throw new Error(`Expected xprops.token`);
}

if (!window.xprops.onComplete) {
    throw new Error(`Expected xprops.onComplete`);
}

window.xprops.onComplete();

