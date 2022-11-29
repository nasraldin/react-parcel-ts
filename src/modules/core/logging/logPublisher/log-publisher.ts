import { LogEntry } from './log-entry';

/**
 * Log Publisher Abstract Class
 */
export abstract class LogPublisher {
  location!: string;

  abstract log(record: LogEntry): void;
}
