/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ErrorResponse, StatusCode } from '~core/http';

import { ServiceError } from '~core/http/models';

export class ConnectionTimedOutError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.ConnectionTimedOut.status;
    this.statusText = StatusCode.ConnectionTimedOut.name;
    this.message =
      message ??
      `The connection has timed out, The ${resourceName} resource could not be landed as the connection took too long to respond. Please try again after some time.`;
    this.errors = errors!;
  }
}
