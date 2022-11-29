/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { ServiceError } from './service-error.model';

/**
 * Represent service response information from the application's service APIs.
 *
 * @SampleResponse
 *
 * {
 *   "isSuccess": false,
 *   "statusCode": 200,
 *   "statusText": 'OK',
 *   "message": "Failed to create new user account.",
 *   "data": null,
 *   "errors": [
 *     {
 *       "name": "PasswordFormatIsValid",
 *       "message": "The password format is not valid. Must contain at least one: alpha, *numeric, and special character.",
 *       "exception": null,
 *       "source": "CreateAccountAction",
 *       "displayToUser": true,
 *       "target": ""
 *     }
 *   ]
 * }
 *
 */
export class ServiceResponse<T> {
  isSuccess?: boolean;
  status?: number;
  statusText?: string;
  message?: string;
  data?: T;
  errors?: ServiceError[] = [];
  timestamp?: number;
  headers?: unknown;
  config?: unknown;
}
