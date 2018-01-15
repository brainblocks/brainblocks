/* @flow */

import { config as loggerConfig } from 'beaver-logger/client';
import { CONFIG as POSTROBOT_CONFIG } from 'post-robot/src';

loggerConfig.logLevel = __DEFAULT_LOG_LEVEL__;
POSTROBOT_CONFIG.LOG_LEVEL = __DEFAULT_LOG_LEVEL__;
window.LOG_LEVEL = __DEFAULT_LOG_LEVEL__;
