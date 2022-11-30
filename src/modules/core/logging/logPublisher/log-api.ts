import { ENABLE_SEQ_LOGS, SEQ_URL } from '~config';

import Axios from 'axios';
import { LogEntry } from './log-entry';
import { LogPublisher } from './log-publisher';

/**
 * Logging Rest/Web API Class
 */
export class LogAPI extends LogPublisher {
  http = Axios;

  constructor() {
    super();
    this.location = SEQ_URL;
  }

  log(entry: LogEntry) {
    const config = {
      headers: {
        'Content-Type': '',
      },
    };

    if (ENABLE_SEQ_LOGS) {
      this.http
        .post(this.location, { events: [entry.buildLog()] }, config)
        .then()
        .catch(this.handleErrors);
    }
  }

  private handleErrors(error: unknown) {
    // eslint-disable-next-line no-console
    console.error('LogAPI: An error occurred', error);
    return error;
  }
}
