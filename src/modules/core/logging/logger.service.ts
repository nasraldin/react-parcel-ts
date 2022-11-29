/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ENABLE_PROD_LOGS, LOG_LEVEL } from '~config';
import { LogEntry, LogPublisher, LogPublishersService } from './logPublisher';

import { LogLevel } from './log-level';
import { LoggingConfig } from './logger.config';

export class LogService {
  publishers: LogPublisher[];
  level: LogLevel = LOG_LEVEL as LogLevel;
  logWithDate: Date = new Date(Date.now());
  config: LoggingConfig = new LoggingConfig();

  constructor(private publishersService: LogPublishersService) {
    this.publishers = this.publishersService.publishers;
  }

  // *************************
  // Public methods
  // *************************
  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Information, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warning, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  // *************************
  // Private methods
  // *************************
  private writeToLog(msg: {}, level?: LogLevel, exception?: {}, tags?: []) {
    if (this.shouldLog(level!)) {
      // Build Log Entry
      const entry: LogEntry = new LogEntry(msg, level, tags, exception);

      for (const logger of this.publishers) {
        console.log(
          `Logging: LogService => writeToLog logger: ${JSON.stringify(logger)} publishers: ${JSON.stringify(
            this.publishers,
          )}`,
        );

        logger.log(entry);
      }
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret = false;

    if ((level === this.level && !ENABLE_PROD_LOGS) || this.level === LogLevel.Verbose) {
      ret = true;
    }

    console.log('Logging: LogService => shouldLog', ret);

    return ret;
  }
}
