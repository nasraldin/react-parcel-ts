// /*
// =============================================================================
// Copyright 2021 Nasr Aldin. All Rights Reserved.
// Project: Online Rent @frontend
// The use of this source code is governed by Nasr Aldin.
// See LICENSE in the project root for license information.
// =============================================================================
// */

// import { BadRequestError, NotFoundError, UnAuthorizedError, UnknownError } from '@root/src/app/common/error';
// import { catchError, map } from 'rxjs/operators';

// import Axios from 'axios-observable';
// import { BaseService } from './base.service';

// /**
//  * A Generic HTTP Service Approach to be used by all other services in the application.
//  *
//  * Use to create and execute HTTP service requests.
//  * get, post, put, patch, delete
//  *
//  */
// export class GenericHttpService implements BaseService {
//   constructor(public endpoint: string, public baseUrl?: string) {
//     this.configure();
//   }

//   get<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   getAll<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   post<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   put<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   patch<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   delete<T>(): T {
//     throw new Error('Method not implemented.');
//   }

//   errorHandler(error: any, resourceName: string): any {
//     if (error.status === 404) {
//       return throwError(new NotFoundError(error));
//     }

//     if (error.status === 401) {
//       return throwError(new UnAuthorizedError(error, `${resourceName}`));
//     }

//     if (error.status === 400) {
//       return throwError(new BadRequestError(error, `${resourceName}`));
//     }

//     return throwError(new UnknownError(error));
//   }

//   configure(): void {
//     this.endpoint = `${this.baseUrl || ''}/${this.endpoint || ''}`;
//   }
// }
export {};
