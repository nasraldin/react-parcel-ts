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

export class BadRequestError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.BadRequest.status;
    this.statusText = StatusCode.BadRequest.name;
    this.message =
      message ??
      `Bad Request, this is not a valid request. Please make sure the request is valid and try again. ${resourceName}`;
    this.errors = errors;
  }
}
