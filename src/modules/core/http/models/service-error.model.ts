/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/**
 * Use this model to represent service error/message information from the
 * application's service APIs.
 *
 * The DisplayToUser boolean value indicates whether the message should be
 * displayed to the user if desired.
 *
 * @SampleResponse
 *
 * {
 *   "isSuccess": false,
 *   "message": "Failed to create new user account.",
 *   "errors": [
 *     {
 *       "name": "PasswordFormatIsValid",
 *       "message": "The password format is not valid. Must contain at least one: alpha,  *numeric, and special character.",
 *       "exception": null,
 *       "source": "CreateAccountAction",
 *       "displayToUser": true,
 *       "target": ""
 *     }
 *   ]
 * }
 *
 */
export abstract class ServiceError {
  name?: string;
  message?: string;
  exception: unknown;
  displayToUser?: boolean;
  source?: string;
  target?: string;
}
