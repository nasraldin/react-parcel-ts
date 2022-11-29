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

export class UnAuthorizedError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.Unauthorized.status;
    this.statusText = StatusCode.Unauthorized.name;
    this.message =
      message ??
      `Unauthorized, You don't have permission to request or view this page using the credentials that you supplied. ${resourceName}`;
    this.errors = errors!;
  }
}
