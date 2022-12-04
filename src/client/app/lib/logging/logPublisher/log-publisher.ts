import { LogEntry } from './log-entry';

/**
 * Log Publisher Abstract Class
 */
export abstract class LogPublisher {
  location!: string;

  // eslint-disable-next-line no-unused-vars
  abstract log(record: LogEntry): void;
}
