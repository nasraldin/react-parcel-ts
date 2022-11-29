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

export class NotImplementedError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.NotImplemented.status;
    this.statusText = StatusCode.NotImplemented.name;
    this.message = message ?? `Not Implemented, The ${resourceName} you are looking for Not Implemented!`;
    this.errors = errors!;
  }
}
