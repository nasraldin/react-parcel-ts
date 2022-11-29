/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ENABLE_PROD_LOGS, LOG_LEVEL } from '~config';
import { LogEntry, LogPublishersService } from './logPublisher';

import { LogLevel } from './log-level';

// *************************
// Properties
// *************************
const publishersService = new LogPublishersService();
// const publishers: LogPublisher[] = publishersService.publishers;
const logLevel: LogLevel = LOG_LEVEL as LogLevel;

// *************************
// Private methods
// *************************
const writeToLog = (msg: {}, level?: LogLevel, fileName?: string, exception?: {}, tags?: []) => {
  if (shouldLog(level!)) {
    let entry = new LogEntry({ Message: msg, FileName: fileName }, level ?? logLevel, tags, exception);

    for (let logger of publishersService.publishers) {
      logger.log(entry);
    }
  }
};

const shouldLog = (level: LogLevel) => {
  let ret: boolean = false;

  if ((level === level && !ENABLE_PROD_LOGS) || level === LogLevel.Verbose) {
    ret = true;
  }

  return ret;
};

/**
 * App Custom logger.
 */
export const log = (message: {}, fileName?: string, level?: LogLevel, tags?: [], exception?: {}) => {
  writeToLog(message, level, fileName, exception, tags);
};
