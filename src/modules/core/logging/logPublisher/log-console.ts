import { LogEntry } from './log-entry';
import { LogPublisher } from './log-publisher';
import { LoggingConfig } from '../logger.config';

/**
 * Console Logging Class
 */
export class LogConsole extends LogPublisher {
  config: LoggingConfig = new LoggingConfig();

  log(entry: LogEntry) {
    // Log to console
    console.log(entry.buildLog());
  }

  clear() {
    console.clear();
  }
}
