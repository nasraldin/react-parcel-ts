/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ENABLE_PROD_LOGS, LOG_LEVEL } from '~config';

import { LogLevel } from './log-level';
import { LogEntry, LogPublishersService } from './logPublisher';

// *************************
// Properties
// *************************
const publishersService = new LogPublishersService();
// const publishers: LogPublisher[] = publishersService.publishers;
const logLevel: LogLevel = LOG_LEVEL as LogLevel;

// *************************
// Private methods
// *************************
const writeToLog = (msg: unknown, level?: LogLevel, fileName?: string, exception?: unknown, tags?: []) => {
  if (shouldLog(level)) {
    const entry = new LogEntry({ Message: msg, FileName: fileName }, level ?? logLevel, tags, exception);

    for (const logger of publishersService.publishers) {
      logger.log(entry);
    }
  }
};

const shouldLog = (level?: LogLevel) => {
  let ret = false;

  if ((level === level && !ENABLE_PROD_LOGS) || level === LogLevel.Verbose) {
    ret = true;
  }

  return ret;
};

/**
 * App Custom logger.
 */
export const log = (message: unknown, fileName?: string, level?: LogLevel, tags?: [], exception?: unknown) => {
  writeToLog(message, level, fileName, exception, tags);
};
