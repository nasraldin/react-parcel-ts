/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { StatusCode } from '../constants';
import { ServiceResponse } from '../models';

/**
 * Use to define a successful API response. A successful response will
 * most likely include a payload of data (i.e., use the Data property).
 *
 * @SampleResponse
 *
 * {
 *   "isSuccess": true,
 *   "statusCode": 200,
 *   "statusText": 'OK',
 *   "message": "Create new user account.",
 *   "data": payload,
 *   "errors": null
 * }
 *
 */
export class SuccessResponse<T> extends ServiceResponse<T> {
  constructor(data: T, message?: string) {
    super();
    this.isSuccess = true;
    this.status = StatusCode.Successful.status;
    this.statusText = StatusCode.Successful.name;
    this.data = data;
    this.message = message;
    this.timestamp = Date.now();
  }
}
