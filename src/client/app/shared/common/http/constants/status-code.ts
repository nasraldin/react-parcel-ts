/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ErrorCode } from '../types';

/**
 * Identifies a error code. The primary identifier is the "status" property, with
 * the "Name" property providing a short description of this type of error.
 */
export class StatusCode {
  public static readonly Successful: ErrorCode = { status: 200, name: 'OK' };
  public static readonly Created: ErrorCode = { status: 201, name: 'Created' };
  public static readonly NoContent: ErrorCode = { status: 204, name: 'No Content' };
  public static readonly MovedPermanently: ErrorCode = {
    status: 301,
    name: 'Moved Permanently',
  };
  public static readonly NotModified: ErrorCode = { status: 304, name: 'Not Modified' };
  public static readonly Redirect: ErrorCode = { status: 307, name: 'Redirect' };
  public static readonly BadRequest: ErrorCode = { status: 400, name: 'Bad Request' };
  public static readonly Unauthorized: ErrorCode = { status: 401, name: 'Unauthorized' };
  public static readonly PaymentRequired: ErrorCode = { status: 402, name: 'Payment Required' };
  public static readonly Forbidden: ErrorCode = { status: 403, name: 'Forbidden' };
  public static readonly NotFound: ErrorCode = { status: 404, name: 'Not Found' };
  public static readonly MethodNotAllowed: ErrorCode = {
    status: 405,
    name: 'Method Not Allowed',
  };
  public static readonly RequestTimeout: ErrorCode = { status: 408, name: 'Request Timeout' };
  public static readonly Conflict: ErrorCode = { status: 409, name: 'Conflict' };
  public static readonly PayloadTooLarge: ErrorCode = {
    status: 413,
    name: 'Payload Too Large',
  };
  public static readonly URITooLong: ErrorCode = { status: 414, name: 'URI Too Long' };
  public static readonly ExpectationFailed: ErrorCode = {
    status: 417,
    name: 'Expectation Failed',
  };
  public static readonly RequestExpired: ErrorCode = { status: 419, name: 'Request Expired' };
  public static readonly Locked: ErrorCode = { status: 423, name: 'Locked' };
  public static readonly TooManyRequests: ErrorCode = {
    status: 429,
    name: 'Too Many Requests',
  };
  public static readonly NoResponse: ErrorCode = { status: 444, name: 'No Response' };
  public static readonly Unavailable: ErrorCode = { status: 451, name: 'Unavailable' };
  public static readonly ClientClosedRequest: ErrorCode = {
    status: 460,
    name: 'Client Closed Request',
  };
  public static readonly InvalidToken: ErrorCode = { status: 498, name: 'Invalid Token' };
  public static readonly TokenRequired: ErrorCode = { status: 499, name: 'Token Required' };
  public static readonly InternalServerError: ErrorCode = {
    status: 500,
    name: 'Internal Server Error',
  };
  public static readonly NotImplemented: ErrorCode = { status: 501, name: 'Not Implemented' };
  public static readonly BadGateway: ErrorCode = { status: 502, name: 'Bad Gateway' };
  public static readonly ServiceUnavailable: ErrorCode = {
    status: 503,
    name: 'Service Unavailable',
  };
  public static readonly GatewayTimeout: ErrorCode = { status: 504, name: 'Gateway Timeout' };
  public static readonly NotSupported: ErrorCode = { status: 505, name: 'Not Supported' };
  public static readonly LoopDetected: ErrorCode = { status: 508, name: 'Loop Detected' };
  public static readonly UnknownError: ErrorCode = { status: 520, name: 'Unknown Error' };
  public static readonly ConnectionTimedOut: ErrorCode = {
    status: 522,
    name: 'Connection Timed Out',
  };
}
