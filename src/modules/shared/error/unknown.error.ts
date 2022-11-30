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

export class UnknownError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.UnknownError.status;
    this.statusText = StatusCode.UnknownError.name;
    this.message = message ?? `An unknown error occurred while accessing the ${resourceName}. Please try again later!`;
    this.errors = errors;
  }
}
