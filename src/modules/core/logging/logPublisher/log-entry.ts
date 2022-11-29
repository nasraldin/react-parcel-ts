import {
  APP_ENV,
  APP_ID,
  APP_NAME,
  APP_TEMPLATE_VERSION,
  APP_VERSION,
  LOG_LEVEL,
  LOG_MESSAGE_TEMPLATE,
  NEXT_VERSION,
} from '~config';

import { LogLevel } from '../log-level';
import { v1 as uuid } from 'uuid';

interface CLEF {
  Timestamp: Date;
  MessageTemplate: string;
  Level: LogLevel;
  Properties: {};
}

/**
 * Log Entry for build Log
 */
export class LogEntry {
  EventId: string = uuid();
  Timestamp = new Date(Date.now());
  Properties: {};
  Level: LogLevel = LOG_LEVEL as LogLevel;
  Tags: [];
  Exception?: {};
  MessageTemplate: string = LOG_MESSAGE_TEMPLATE;

  constructor(properties: {}, level?: LogLevel, tags?: [], exception?: {}, messageTemplate?: string) {
    this.Properties = properties;
    this.Level = level ?? this.Level;
    this.Tags = tags!;
    this.Exception = exception;
    this.MessageTemplate = messageTemplate ?? LOG_MESSAGE_TEMPLATE;
  }

  buildLog(): CLEF {
    return {
      Timestamp: this.Timestamp,
      Level: this.Level,
      MessageTemplate: this.MessageTemplate,
      Properties: {
        Application: APP_NAME,
        AppVersion: APP_VERSION,
        Env: APP_ENV(),
        AppId: APP_ID,
        AppTemplateVersion: APP_TEMPLATE_VERSION,
        NextJsVersion: NEXT_VERSION,
        EventId: this.EventId,
        LogLevel: this.Level,
        User: 'SYSTEM',
        Timestamp: this.Timestamp,
        Tags: this.Tags,
        Exception: this.Exception!,
        ...this.Properties,
      },
    };
  }
}
