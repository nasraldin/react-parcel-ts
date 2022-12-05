/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ErrorResponse, ServiceError, StatusCode } from 'shared/common/http';

export class AccessDeniedError extends ErrorResponse {
  constructor(errors?: ServiceError[], message?: string, resourceName?: string) {
    super();
    this.status = StatusCode.Forbidden.status;
    this.statusText = StatusCode.Forbidden.name;
    this.message = message ?? `Access Denied, You Don’t Have Permission To Access The ${resourceName} Resource.`;
    this.errors = errors;
  }
}
