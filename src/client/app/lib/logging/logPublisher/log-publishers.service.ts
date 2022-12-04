import { ENABLE_SEQ_LOGS, WRITE_LOGS_TO_CONSOLE, WRITE_LOGS_TO_FILE } from '~config';
import { CheckBoolean } from '~shared/utils';

import { LogAPI } from './log-api';
import { LogConsole } from './log-console';
import { LogPublisher } from './log-publisher';
import { LogPublisherType } from './log-publisher.type';

export class LogPublishersService {
  // Public properties
  publishers: LogPublisher[] = [];

  constructor() {
    // Build publishers arrays
    this.buildPublishers();
  }

  // Build publishers array
  buildPublishers(): LogPublisher[] {
    let logPub = {};
    const logConfig = [
      { isActive: CheckBoolean(WRITE_LOGS_TO_CONSOLE), loggerName: LogPublisherType.Console },
      { isActive: CheckBoolean(ENABLE_SEQ_LOGS), loggerName: LogPublisherType.Seq },
      { isActive: CheckBoolean(WRITE_LOGS_TO_FILE), loggerName: LogPublisherType.File },
    ];

    try {
      for (const pub of logConfig.filter((p) => p.isActive)) {
        switch (pub.loggerName) {
          case LogPublisherType.Console:
            logPub = new LogConsole();
            break;
          case LogPublisherType.Seq:
            logPub = new LogAPI();
            break;
          case LogPublisherType.File:
            // eslint-disable-next-line no-console
            console.warn('LogPublishersService: WRITE_LOGS_TO_FILE is not implemented.');
            break;
        }

        // Add publisher to array
        this.publishers.push(logPub as LogPublisher);
      }
    } catch (error) {
      this.handleErrors(error);
    }

    return this.publishers;
  }

  private handleErrors(error: unknown) {
    // eslint-disable-next-line no-console
    console.error('LogPublishersService: An error occurred', error);
    return error;
  }
}
