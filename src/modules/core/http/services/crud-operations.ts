/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

import { AxiosResponse } from 'axios';
import { ServiceResponse } from '../models';

/**
 * Basic CRUD operations (Create, Read, Update, and Delete)
 *
 * create, get, getAll, update, delete
 */
export interface CrudOperations<T, Id> {
  /**
   * The create is used to submit an entity to the specified resource.
   *
   * @returns T
   */
  create<T>(t: T): T;

  /**
   * Requests using get should only retrieve data.
   *
   * @returns T
   */
  get<T>(id: Id): T;

  /**
   * Requests using getAll should only retrieve all data.
   *
   * @returns T
   */
  getAll<T>(): ServiceResponse<T>;

  /**
   * The update is used to update an entity to the specified resource.
   *
   * @returns T
   */
  update<T>(id: Id, t: T): T;

  /**
   * The delete is used to deletes the specified resource.
   *
   * @returns T
   */
  delete<T>(id: Id): T;

  /**
   * Handel the request response
   */
  createResponse(response: AxiosResponse): unknown;

  /**
   * Custom exception handler that replaces this default as appropriate for your app.
   *
   * @returns any
   */
  errorHandler(error: unknown, resourceName: string): unknown;

  /**
   * Wrap http configs, headers etc...
   */
  configure(): void;
}
