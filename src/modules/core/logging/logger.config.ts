import { LogLevel } from './log-level';

export class LoggingConfig {
  showStyles? = true;
  showTime? = true;
  showEmoji? = true;
  showLabel? = true;
  fontSize?: number;
  labelColor?: {
    [logLevel: number]: string;
  } = {};
  bgColor?: {
    [logLevel: number]: string;
  } = {};
  logEmoji?: {
    [logLevel: number]: string;
  } = {};
}

export const DefaultColors = {
  [LogLevel.Verbose]: '#fff',
  [LogLevel.Debug]: '#000000',
  [LogLevel.Information]: '#000000',
  [LogLevel.Warning]: '#fff',
  [LogLevel.Error]: '#fff',
  [LogLevel.Fatal]: '#fff',
};

export const DefaultLabelColors = {
  [LogLevel.Verbose]: '#000080',
  [LogLevel.Debug]: '#1976d2',
  [LogLevel.Information]: '#000000',
  [LogLevel.Warning]: '#FF6419',
  [LogLevel.Error]: '#F1062D',
  [LogLevel.Fatal]: 'red',
};

export const DefaultBGColors = {
  [LogLevel.Verbose]: '#e42c64',
  [LogLevel.Debug]: '#00BFFE',
  [LogLevel.Information]: '#1ee3cf',
  [LogLevel.Warning]: '#FF6419',
  [LogLevel.Error]: '#F1062D',
  [LogLevel.Fatal]: '#6b48ff',
};

export const DefaultEmojis = {
  [LogLevel.Verbose]: '🤿',
  [LogLevel.Debug]: '💻',
  [LogLevel.Information]: '✔',
  [LogLevel.Warning]: '🙄',
  [LogLevel.Error]: '😲',
  [LogLevel.Fatal]: '😱',
};

export interface HeaderConfig {
  color?: string;
  fontSize?: number;
}

export interface FormatOutput {
  label: string;
  style: string;
}
