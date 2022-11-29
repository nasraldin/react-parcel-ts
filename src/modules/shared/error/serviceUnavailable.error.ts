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

export class ServiceUnavailableError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.ServiceUnavailable.status;
    this.statusText = StatusCode.ServiceUnavailable.name;
    this.message = message ?? `Service Unavailable, the server is temporarily busy, try again later! ${resourceName}`;
    this.errors = errors!;
    console.log('Service Unavailable');
  }
}
