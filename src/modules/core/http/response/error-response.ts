/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ServiceResponse } from '../models';

/**
 * Use to define a error API response. A error response will
 * most likely include a payload of errors info.
 *
 * @SampleResponse
 *
 * {
 *   "isSuccess": false,
 *   "statusCode": 200,
 *   "statusText": 'OK',
 *   "message": "Create new user account.",
 *   "data": payload,
 *   "errors": null
 * }
 *
 */
export class ErrorResponse extends ServiceResponse<object> {
  // statusCode: number, statusText: string, message: string, errors: ServiceError[]
  constructor() {
    super();
    this.isSuccess = false;
    // this.status = statusCode;
    // this.statusText = statusText;
    // this.message = message;
    // this.errors = errors;
  }
}
