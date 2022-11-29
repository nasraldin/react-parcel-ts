/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/**
 * Identifies a error code. The primary identifier is the "status" property, with
 * the "Name" property providing a short description of this type of error.
 */
export type ErrorCode = {
  /**
   * The numeric identifier for this error code.
   */
  status: number;
  /**
   * The name of this error code.
   */
  name: string;
};
