/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/**
 * A Generic HTTP Service Approach.
 */
export interface BaseService {
  /**
   * Base Url of the service to connect to.
   */
  baseUrl?: string;

  /**
   * Endpoint of the service to connect to.
   */
  endpoint: string;

  /**
   * Requests using GET should only retrieve data.
   *
   * @returns T
   */
  get<T>(): T;

  /**
   * The POST method is used to submit an entity to the specified resource,
   * often causing a change in state or side effects on the server.
   *
   * @returns T
   */
  post<T>(): T;

  /**
   * The PUT method replaces all current representations of the target resource
   * with the request payload.
   *
   * @returns T
   */
  put<T>(): T;

  /**
   * The PATCH method is used to apply partial modifications to a resource.
   *
   * @returns T
   */
  patch<T>(): T;

  /**
   * The DELETE method deletes the specified resource
   *
   * @returns T
   */
  delete<T>(): T;

  /**
   * Custom exception handler that replaces this default as appropriate for your app.
   *
   * @returns any
   */
  // eslint-disable-next-line no-unused-vars
  errorHandler(error: unknown, resourceName: string): unknown;

  /**
   * Wrap http configs, headers etc...
   */
  configure(): void;
}
