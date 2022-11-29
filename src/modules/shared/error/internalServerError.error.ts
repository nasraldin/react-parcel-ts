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

export class InternalServerErrorError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.InternalServerError.status;
    this.statusText = StatusCode.InternalServerError.name;
    this.message =
      message ??
      `Internal Server Error, the server encountered an internal error or misconfiguration and was unable to complete your request. ${resourceName}`;
    this.errors = errors!;
  }
}
